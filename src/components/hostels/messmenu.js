import React from 'react';
import '..//../design//hosteldesign/messmenu.css'
export default function Messmenu() {
  const Mess = [
    {
      Day: "Sunday",
      BreakFast: ["item1", "item2", "item3"],
      Lunch: ["item3", "item4", "item4"],
      Snacks: ["item5", "item6", "item7"],
      Dinner: ["item7", "item8", "item9"],
      Calorie: "amount",
    },
    {
        Day: "Monday",
        BreakFast: ["item10", "item11", "item12"],
        Lunch: ["item13", "item14", "item15"],
        Snacks: ["item16", "item17", "item18"],
        Dinner: ["item19", "item20", "item21"],
        Calorie: "amount",
      },
      {
        Day: "Tuesday",
        BreakFast: ["item10", "item11", "item12"],
        Lunch: ["item13", "item14", "item15"],
        Snacks: ["item16", "item17", "item18"],
        Dinner: ["item19", "item20", "item21"],
        Calorie: "amount",
      },
      {
        Day: "Wednesday",
        BreakFast: ["item10", "item11", "item12"],
        Lunch: ["item13", "item14", "item15"],
        Snacks: ["item16", "item17", "item18"],
        Dinner: ["item19", "item20", "item21"],
        Calorie: "amount",
      },
      {
        Day: "Thursday",
        BreakFast: ["item10", "item11", "item12"],
        Lunch: ["item13", "item14", "item15"],
        Snacks: ["item16", "item17", "item18"],
        Dinner: ["item19", "item20", "item21"],
        Calorie: "amount",
      },
      {
        Day: "Friday",
        BreakFast: ["item10", "item11", "item12"],
        Lunch: ["item13", "item14", "item15"],
        Snacks: ["item16", "item17", "item18"],
        Dinner: ["item19", "item20", "item21"],
        Calorie: "amount",
      },
      {
        Day: "Saturday",
        BreakFast: ["item10", "item11", "item12"],
        Lunch: ["item13", "item14", "item15"],
        Snacks: ["item16", "item17", "item18"],
        Dinner: ["item19", "item20", "item21"],
        Calorie: "amount",
      },
  ];

  return (
    <div className='messmenu-div'>
      <table>
        <thead>
          <tr>
            <th>Day</th>
            <th>Breakfast</th>
            <th>Calorie</th>
            <th>Lunch</th>
            <th>Calorie</th>
            <th>Snacks</th>
            <th>Calorie</th>
            <th>Dinner</th>
            <th>Calorie</th>
          </tr>
        </thead>
        <tbody>
          {Mess.map((val, key) => (
            <tr key={key}>
              <td>{val.Day}</td>
              <td>{val.BreakFast.join(', ')}</td>
              <td>{val.Calorie}</td>
              <td>{val.Lunch.join(', ')}</td>
              <td>{val.Calorie}</td>
              <td>{val.Snacks.join(', ')}</td>
              <td>{val.Calorie}</td>
              <td>{val.Dinner.join(', ')}</td>
              <td>{val.Calorie}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

