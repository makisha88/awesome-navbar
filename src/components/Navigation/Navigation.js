import React, { Component } from 'react';

import classes from './Navigation.module.css';

import NavElement from './NavElement/NavElement';

class Navigation extends Component {
    state = {
        language: 1,
        showHide: false
    }
    onChangeLanguage = (e) => {
        const valueSelectedByUser = parseInt(e.target.value);
        this.setState({language: valueSelectedByUser});
    }
    showHideDropdown = () => {
        this.state.showHide ? this.setState({showHide: false}) : this.setState({showHide: true});
    }
    render () {
        // 1 is for english 2 for srpski
        let navigationData = this.state.language === 1 ? this.props.NavElements.en : this.props.NavElements.rs;

        let navigation = navigationData.map(( value, index )=>{

            let stringArray = value.split(" ");    // string to array
            let newStringArray = [];              // new array for new elements
            var i;
            for (i = 0; i < stringArray.length; i++) {
                if (stringArray[i + 1]) {           // looking forward to check next element if its length < 3
                    let newString = stringArray[i]
                    while (i < stringArray.length - 1 && stringArray[i].length < 3) {  // looking further forward to check next element also
                        newString = newString + " " + stringArray[i+1]
                        i++ 
                    }
                    newStringArray.push(newString)
                } else if (stringArray[i].length > 2) {         // simple push new element
                    newStringArray.push(stringArray[i])
                }  
            }

            return <NavElement 
                    key={index}
                    labels={newStringArray}/>
        });

        return (
            <div className={classes.NavigationWrapper}>
                <div className={classes.NavigationElements}>
                    {navigation}
                </div>
                <div className={classes.DropDownWrapper}>
                    <div className={classes.DropDownDots} onClick={this.showHideDropdown}>
                        <span />
                        <span />
                        <span />
                    </div>
                    <div className={classes.DropDown} style={{display: this.state.showHide ? 'block' : 'none'}}>
                        <span />
                        {navigation}
                    </div>
                </div>
                <div className={classes.SelectElement}>
                    <div>
                        <span />
                        <span />
                    </div>
                    <select onChange={this.onChangeLanguage}>
                        <option value="1">English</option>
                        <option value="2">Srpski</option>
                    </select>
                </div>
            </div>
        )
    }
};

export default Navigation;