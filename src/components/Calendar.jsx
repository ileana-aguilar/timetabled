import React from "react";
import Event from "./Event";

const Calendar = () => {
    return (
        <div className="Calendar">
            <table>
                <thead>
                    <tr>
                        <th colSpan={2}>Sunday</th>
                        <th>Monday</th>
                        <th>Tuesday</th>
                        <th>Wednesday</th>
                        <th>Thursday</th>
                        <th>Friday</th>
                        <th >Saturday</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="time">8 am</td>
                        <td></td>
                        <td></td>
                        <Event event="Class 👩🏻‍💻" location="Campus" color ='blue'/>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td className="time">9 am</td>
                        <Event event='Go for a run 🏃🏻‍♀️' location="Forest Park, NY" color ='pink'/>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td className="time">10 am</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <Event event="Breakfeast 🥞" location="Home " color ='green'/>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td className="time">11 am</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <Event event="Brunch 🍽️" location="Station House" color ='green'/>
                    </tr>
                    <tr>
                        <td className="time">12 pm</td>
                        <Event event="Brunch 🍽️" location="Sweet Chick " color ='green'/>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td className="time">1 pm</td>
                        <td></td>
                        <Event event='Lunch 🥘' location="Dining Hall" color ='green'/>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td className="time">2 pm</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <Event event="Class 👩🏻‍💻" location="Campus" color ='blue'/>
                        <Event event='Rock Climbing 🧗🏻‍♀️' location="Gym" color ='pink'/>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td className="time">3 pm</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td className="time">4 pm</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <Event event='Go for a run 🏃🏻‍♀️' location="Forest Park, NY" color ='pink'/>
                    </tr>
                    <tr>
                        <td className="time">5 pm</td>
                        <td></td>
                        <td></td>
                        <Event event='Taco Tuesday 🌮' location="Taqueria" color ='green'/>
                        <td></td>
                        <td></td>
                        <Event event='Pizza Party 🍕' location="Joe's pizzeria" color ='green'/>
                        <td></td>
                    </tr>
                </tbody>
                
            </table>
           
        </div>

    )
}

export default Calendar;