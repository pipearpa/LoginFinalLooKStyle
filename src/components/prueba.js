import React, {Component} from "react";
import Cookies from "universal-cookie";

const cookies = new Cookies();

class prueba  extends Component {
     render() {
        console.log('id'+ cookies.get('id'));
        console.log('name'+ cookies.get('name'));
        console.log('last_name'+ cookies.get('last_name'));
        console.log('email'+ cookies.get('email'));
        console.log('phone_number'+ cookies.get('phone_number'));
        console.log('save'+ cookies.get('save'));
        return (
            <div>
                Menu principal
            </div>
        )


     }
}


export  default prueba;