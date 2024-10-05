
import React, { useState, useEffect } from 'react';


const fetchMenuData = async () => {
  const response = await fetch('https://api.jsonbin.io/v3/b/66faa41facd3cb34a88ed968/latest');
  const data = await response.json();
  return data.record; 
};

const MenuPage = () => {
  const [menuItems, setMenuItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [order, setOrder] = useState([]);
  const [orderHistory, setOrderHistory] = useState([]);
  const [orderDetails, setOrderDetails] = useState({ tableNumber: '', contactNumber: '', date: '', time: '' });

  
  useEffect(() => {
    fetchMenuData()
      .then(data => {
        setMenuItems(data); 
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching menu items:', error);
        setLoading(false);
      });

    
    const savedOrderHistory = localStorage.getItem('orderHistory');
    if (savedOrderHistory) {
      setOrderHistory(JSON.parse(savedOrderHistory));
    }
  }, []);

  
  const addToOrder = (item) => {
    if (item.available_quantity > 0) { 
      setOrder([...order, item]);
      
      const updatedItems = menuItems.map(menuItem => {
        if (menuItem.id === item.id) {
          return { ...menuItem, available_quantity: menuItem.available_quantity - 1 }; // Decrease the available quantity
        }
        return menuItem;
      });
      setMenuItems(updatedItems);
    }
  };

  
  const placeOrder = () => {
    if (order.length > 0) {
      const newOrder = {
        items: order,
        details: orderDetails,
        date: new Date().toLocaleString(),
      };
      console.log("Placing order:", newOrder); 
      const updatedOrderHistory = [...orderHistory, newOrder];
      setOrderHistory(updatedOrderHistory); 
      localStorage.setItem('orderHistory', JSON.stringify(updatedOrderHistory)); 
     
      setOrder([]); 
      setOrderDetails({ tableNumber: '', contactNumber: '', date: '', time: '' });
    } else {
      console.log("No items in order to place."); 
    }
  };

 
  const handleDetailChange = (e) => {
    const { name, value } = e.target;
    setOrderDetails({ ...orderDetails, [name]: value });
  };

  if (loading) {
    return <p>Loading...</p>; 
  }

  return (
    <div style={{ padding: '20px', backgroundColor: '#f5f5f5' }}>
      <h1 style={{ textAlign: 'center' }}>Menu Items</h1>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', justifyContent: 'center' }}>
        {menuItems.map((item) => (
          <div key={item.id} style={{
            border: '1px solid #ccc',
            borderRadius: '8px',
            width: '200px',
            backgroundColor: '#fff', 
            boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
            padding: '10px',
            textAlign: 'center', 
            transition: 'transform 0.2s',
          }}>
            <img src={item.image_url || 'https://via.placeholder.com/150'} alt={item.name} style={{ width: '100%', borderRadius: '8px' }} />
            <h3>{item.name}</h3>
            <p>Price: ${item.price.toFixed(2)}</p>
            {item.available_quantity > 0 ? (
              <p>Available: {item.available_quantity}</p>
            ) : (
              <p style={{ color: 'red' }}>Out of Stock</p>
            )}
            <button
              onClick={() => addToOrder(item)}
              disabled={item.available_quantity === 0}
              style={{
                backgroundColor: item.available_quantity > 0 ? '#28a745' : '#ccc',
                color: '#fff',
                border: 'none',
                borderRadius: '4px',
                padding: '8px 12px',
                cursor: item.available_quantity > 0 ? 'pointer' : 'not-allowed',
                width: '100%',
                marginTop: '10px',
              }}
            >
              {item.available_quantity > 0 ? 'Add to Order' : 'Unavailable'}
            </button>
          </div>
        ))}
      </div>

      <h2>Your Order</h2>
      <div>
        {order.map((item, index) => (
          <div key={index}>
            {item.name} - ${item.price.toFixed(2)}
          </div>
        ))}
      </div>

      <h2>Order Details</h2>
      <input
        type="text"
        name="tableNumber"
        placeholder="Table Number"
        value={orderDetails.tableNumber}
        onChange={handleDetailChange}
        style={{ display: 'block', margin: '10px 0', padding: '8px', width: '100%' }}
      />
      <input
        type="text"
        name="contactNumber"
        placeholder="Contact Number (optional)"
        value={orderDetails.contactNumber}
        onChange={handleDetailChange}
        style={{ display: 'block', margin: '10px 0', padding: '8px', width: '100%' }}
      />
      <input
        type="date"
        name="date"
        placeholder="Date"
        value={orderDetails.date}
        onChange={handleDetailChange}
        style={{ display: 'block', margin: '10px 0', padding: '8px', width: '100%' }}
      />
      <input
        type="time"
        name="time"
        placeholder="Time"
        value={orderDetails.time}
        onChange={handleDetailChange}
        style={{ display: 'block', margin: '10px 0', padding: '8px', width: '100%' }}
      />
      <button onClick={placeOrder} disabled={order.length === 0} style={{
        backgroundColor: '#007bff',
        color: '#fff',
        border: 'none',
        borderRadius: '4px',
        padding: '10px 15px',
        cursor: 'pointer',
        marginTop: '10px',
        width: '100%',
      }}>Place Order</button>

      <h2>Order History</h2>
      <div>
        {orderHistory.map((historyItem, index) => (
          <div key={index}>
            <h3>Order on {historyItem.date}</h3>
            <p>Table: {historyItem.details.tableNumber}</p>
            <p>Contact: {historyItem.details.contactNumber}</p>
            <h4>Items:</h4>
            {historyItem.items.map((item, idx) => (
              <div key={idx}>{item.name} - ${item.price.toFixed(2)}</div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default MenuPage;

