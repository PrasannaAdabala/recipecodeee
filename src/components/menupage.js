
import React, { useState, useEffect } from 'react';


const initialDishes = {
  record: [
    {
      "id": "1",
      "name": "Black Coffee",
      "category": "Beverages",
      "sub_category": "Coffee",
      "available_quantity": 10,
      "price": 199.18,
      "image_url": "https://www.livofy.com/health/wp-content/uploads/2020/05/black-coffee.jpg",
      "type": "veg"
    },
    {
      "id": "2",
      "name": "Espresso",
      "category": "Beverages",
      "sub_category": "Coffee",
      "available_quantity": 8,
      "price": 245.18,
      "image_url": "https://coffeehero.com.au/cdn/shop/articles/758214849ae27a07c55af11f0f0f633b_2048x2048.jpg?v=1623281348",
      "type": "veg"
    },
    {
      "id": "3",
      "name": "Double Espresso",
      "category": "Beverages",
      "sub_category": "Coffee",
      "available_quantity": 6,
      "price": 327.18,
      "image_url": "https://cdn.o2vend.com/840e087a-a6ca-44e0-b5ca-ff41d3115911/9faf8b13-7e93-46ef-9826-26ae19345226.jpg",
      "type": "veg"
    },
    {
      "id": "4",
      "name": "Latte",
      "category": "Beverages",
      "sub_category": "Coffee",
      "available_quantity": 4,
      "price": 327.18,
      "image_url": "https://coffeebros.com/cdn/shop/articles/unnamed_be2775a1-186d-40c1-b094-488fa5fa4050.png?v=1675965693",
      "type": "veg"
    },
    {
      "id": "5",
      "name": "Paneer Pizzaa",
      "category": "Food",
      "sub_category": "Pizza",
      "available_quantity": 10,
      "price": 737.18,
      "image_url": "https://foodoncall.co.in/wp-content/uploads/2017/10/chatpata-paneer-pizza.jpg",
      "type": "veg"
    },
    {
      "id": "6",
      "name": "Corn Pizza",
      "category": "Food",
      "sub_category": "Pizza",
      "available_quantity": 8,
      "price": 573.18,
      "image_url": "https://api.pizzahut.io/v1/content/en-in/in-1/images/pizza/corn.f8baa08ad7f607f1de30f96bb9245b50.1.jpg",
      "type": "veg"
    },
    {
      "id": "7",
      "name": "Vegetable Pizza",
      "category": "Food",
      "sub_category": "Pizza",
      "available_quantity": 6,
      "price": 819.18,
      "image_url": "https://foods.qmanja.com/MenuImages/Menu5114-Mix-veg-pizza.jpg.png",
      "type": "veg"
    },
    {
      "id": "8",
      "name": "Chicken BBQ Pizza",
      "category": "Food",
      "sub_category": "Pizza",
      "available_quantity": 2,
      "price": 819.18,
      "image_url": "https://i0.wp.com/www.slapyodaddybbq.com/wp-content/uploads/BBQChickenPizza-foodgawker.jpg?fit=600%2C600&ssl=1",
      "type": "non-veg"
    },
    {
      "id": "9",
      "name": "Chicken Tandoori Pizza",
      "category": "Food",
      "sub_category": "Pizza",
      "available_quantity": 3,
      "price": 901.18,
      "image_url": "https://tastytango.blog/wp-content/uploads/2023/07/koolgurl._A_close-up_high_quality_photo_of_a_Tandoori_Fusion_De_2028d66f-ef2d-46ba-8ebd-41491e80ba4b.jpg",
      "type": "non-veg"
    },
    {
      "id": "10",
      "name": "Penne Alfredo",
      "category": "Food",
      "sub_category": "Pasta",
      "available_quantity": 8,
      "price": 737.18,
      "image_url": "https://www.spoonfulofflavor.com/wp-content/uploads/2023/12/alfredo-penne-pasta-500x375.jpg",
      "type": "veg"
    },
    {
      "id": "11",
      "name": "Pasta alla Norma",
      "category": "Food",
      "sub_category": "Pasta",
      "available_quantity": 6,
      "price": 819.18,
      "image_url": "https://www.themediterraneandish.com/wp-content/uploads/2020/12/pasta-alla-norma-recipe-6.jpg",
      "type": "veg"
    },
    {
      "id": "12",
      "name": "Pasta e fagioli",
      "category": "Food",
      "sub_category": "Pasta",
      "available_quantity": 1,
      "price": 573.18,
      "image_url": "https://www.saveur.com/uploads/2019/04/22/G3TIHE7ANJTO5EQGLDVLN4WIQA-768x1024.jpg?auto=webp&optimize=high&quality=70&width=1440",
      "type": "veg"
    },
    {
      "id": "13",
      "name": "Chicken Alfredo",
      "category": "Food",
      "sub_category": "Pasta",
      "available_quantity": 9,
      "price": 901.18,
      "image_url": "https://assets.epicurious.com/photos/5988e3458e3ab375fe3c0caf/16:9/w_1280,c_limit/How-to-Make-Chicken-Alfredo-Pasta-hero-02082017.jpg",
      "type": "non-veg"
    },
    {
      "id": "14",
      "name": "Chicken Pesto Pasta",
      "category": "Food",
      "sub_category": "Pasta",
      "available_quantity": 10,
      "price": 819.18,
      "image_url": "https://therecipecritic.com/wp-content/uploads/2023/02/chickenpestopasta-1.jpg",
      "type": "non-veg"
    },
    {
      "id": "15",
      "name": "Chocolate Lava Cake",
      "category": "Food",
      "sub_category": "Dessert",
      "available_quantity": 10,
      "price": 573.18,
      "image_url": "https://floursandfrostings.com/wp-content/uploads/2017/01/IMG_20170104_003650_972-1.jpg",
      "type": "veg"
    },
    {
      "id": "16",
      "name": "Tiramisu",
      "category": "Food",
      "sub_category": "Dessert",
      "available_quantity": 8,
      "price": 819.18,
      "image_url": "https://www.cookingclassy.com/wp-content/uploads/2022/08/tiramisu-17.jpg",
      "type": "veg"
    },
    {
      "id": "17",
      "name": "Cheesecake",
      "category": "Food",
      "sub_category": "Dessert",
      "available_quantity": 3,
      "price": 901.18,
      "image_url": "https://www.jocooks.com/wp-content/uploads/2018/11/cheesecake-1-22.jpg",
      "type": "veg"
    },
    {
      "id": "18",
      "name": "Apple Pie",
      "category": "Food",
      "sub_category": "Dessert",
      "available_quantity": 8,
      "price": 819.18,
      "image_url": "https://schoolnightvegan.com/wp-content/uploads/2022/11/vegan-apple-pie-25.jpg",
      "type": "veg"
    },
    {
      "id": "19",
      "name": "Chocolate Mousse",
      "category": "Food",
      "sub_category": "Dessert",
      "available_quantity": 4,
      "price": 901.18,
      "image_url": "https://bakerbynature.com/wp-content/uploads/2023/08/Easy-Chocolate-Mousse-Baker-by-Nature-12617-1-500x500.jpg",
      "type": "veg"
    },
    {
      "id": "20",
      "name": "Chocolate Milkshake",
      "category": "Food",
      "sub_category": "Milkshake",
      "available_quantity": 2,
      "price": 573.18,
      "image_url": "https://www.orchidsandsweettea.com/wp-content/uploads/2020/01/Peanut-Butter-Milkshake-4-of-4.jpg",
      "type": "veg"
    },
    {
      "id": "21",
      "name": "Vanilla Milkshake",
      "category": "Food",
      "sub_category": "Milkshake",
      "available_quantity": 3,
      "price": 501.18,
      "image_url": "https://pintsizedbaker.com/wp-content/uploads/2015/12/Vanilla-Shake-4.jpg.webp",
      "type": "veg"
    },
    {
      "id": "22",
      "name": "Strawberry Milkshake",
      "category": "Food",
      "sub_category": "Milkshake",
      "available_quantity": 8,
      "price": 573.18,
      "image_url": "https://www.justsotasty.com/wp-content/uploads/2018/05/Strawberry-Milkshake.jpg",
      "type": "veg"
    },
    {
      "id": "23",
      "name": "Oreo Milkshake",
      "category": "Food",
      "sub_category": "Milkshake",
      "available_quantity": 6,
      "price": 901.18,
      "image_url": "https://www.whiskaffair.com/wp-content/uploads/2020/07/Oreo-Milkshake-2-3.jpg",
      "type": "veg"
    }
  ],
  "metadata": {
    "id": "66faa41facd3cb34a88ed968",
    "private": false,
    "createdAt": "2024-09-30T13:14:07.482Z",
    "name": "menu"
  }
  
};

const MenuPage = () => {
  const [dishes, setDishes] = useState(initialDishes.record);
  const [order, setOrder] = useState([]);
  const [orderHistory, setOrderHistory] = useState(() => {
    const storedHistory = localStorage.getItem('orderHistory');
    return storedHistory ? JSON.parse(storedHistory) : [];
  });
  const [tableNumber, setTableNumber] = useState('');
  const [contactNumber, setContactNumber] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [error, setError] = useState('');
  const [bookedTables, setBookedTables] = useState(new Set());

  useEffect(() => {
    localStorage.setItem('orderHistory', JSON.stringify(orderHistory));
    
    const newBookedTables = new Set(orderHistory.map(order => order.tableNumber));
    setBookedTables(newBookedTables);
  }, [orderHistory]);

  const addToOrder = (dish) => {
    if (dish.available_quantity > 0) {
      setOrder((prevOrder) => [...prevOrder, dish]);
      setDishes((prevDishes) =>
        prevDishes.map((item) =>
          item.id === dish.id ? { ...item, available_quantity: item.available_quantity - 1 } : item
        )
      );
    } else {
      alert('Sorry, this dish is out of stock.');
    }
  };

  const handlePlaceOrder = () => {
    if (!tableNumber || !date || !time) {
      setError('Please fill in all required fields.');
      return;
    }
    if (bookedTables.has(tableNumber)) { 
      setError('This table is already booked. Please choose another table.');
      return;
    }

    const newOrder = {
      tableNumber,
      contactNumber,
      date,
      time,
      order,
    };

    setOrderHistory((prevHistory) => [...prevHistory, newOrder]);
    resetForm();
  };

  const resetForm = () => {
    setOrder([]);
    setTableNumber('');
    setContactNumber('');
    setDate('');
    setTime('');
    setError('');
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1 style={{ textAlign: 'center', color: '#333' }}>Menu</h1>
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
        {dishes.map((dish) => (
          <div key={dish.id} style={cardStyle}>
            <img src={dish.image_url} alt={dish.name} style={{ width: '100%', borderRadius: '10px' }} />
            <h2 style={textStyle}>{dish.name}</h2>
            <p style={textStyle}>Category: {dish.category}</p>
            <p style={textStyle}>Price: ${dish.price.toFixed(2)}</p>
            <p style={textStyle}>Available: {dish.available_quantity}</p>
            <button onClick={() => addToOrder(dish)} style={buttonStyle}>Add to Order</button>
          </div>
        ))}
      </div>

      <h2 style={orderStyle}>Order Summary</h2>
      {order.length > 0 ? (
        <div style={orderStyle}>
          {order.map((dish, index) => (
            <p key={index}>{dish.name} - ${dish.price.toFixed(2)}</p>
          ))}
          <h3>Total: ${order.reduce((total, dish) => total + dish.price, 0).toFixed(2)}</h3>
        </div>
      ) : (
        <p style={{ textAlign: 'center' }}>No dishes added to the order.</p>
      )}

      <div style={formStyle}>
        <h2 style={{ textAlign: 'center', color: '#333' }}>Place Your Order</h2>
        {error && <p style={{ color: 'red', textAlign: 'center' }}>{error}</p>}
        <input
          type="text"
          placeholder="Table Number"
          value={tableNumber}
          onChange={(e) => setTableNumber(e.target.value)}
          style={inputStyle}
        />
        <input
          type="text"
          placeholder="Contact Number (optional)"
          value={contactNumber}
          onChange={(e) => setContactNumber(e.target.value)}
          style={inputStyle}
        />
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          style={inputStyle}
        />
        <input
          type="time"
          value={time}
          onChange={(e) => setTime(e.target.value)}
          style={inputStyle}
        />
        <button onClick={handlePlaceOrder} style={buttonStyle}>Place Order</button>
      </div>

      <h2 style={{ textAlign: 'center', marginTop: '40px', color: '#333' }}>Order History</h2>
      {orderHistory.length > 0 ? (
        <ul style={{ textAlign: 'center' }}>
          {orderHistory.map((history, index) => (
            <li key={index}>
              <p>Table: {history.tableNumber}, Date: {history.date}, Time: {history.time}</p>
              <p>Order: {history.order.map(dish => dish.name).join(', ')}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p style={{ textAlign: 'center' }}>No orders have been placed yet.</p>
      )}
    </div>
  );
};


const cardStyle = {
  border: '1px solid #ccc',
  borderRadius: '10px',
  margin: '10px',
  padding: '10px',
  width: '200px',
  textAlign: 'center',
};

const textStyle = {
  fontSize: '16px',
  margin: '5px 0',
};

const buttonStyle = {
  backgroundColor: '#28a745',
  color: 'white',
  border: 'none',
  borderRadius: '5px',
  padding: '10px',
  cursor: 'pointer',
};

const orderStyle = {
  textAlign: 'center',
  margin: '20px 0',
};

const formStyle = {
  margin: '20px 0',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
};

const inputStyle = {
  margin: '10px 0',
  padding: '10px',
  width: '200px',
};

export default MenuPage;
