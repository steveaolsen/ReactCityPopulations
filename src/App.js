import React, {Component} from 'react';
import Table from './Table';
import cities from './Cities';




class App extends Component {

    state = {
        userInput: "Enter Your City's Population",
        userRank: "Enter a Population and Click the Button",   
        biggerThan: "...",
    }
    

    popChanger = (event) => {
        let userPop = event.target.value;

        if (/^\d*$/.test(userPop)) {
            this.setState( {userInput: userPop } );
        }       
    }
              
    popClear = (event) => {

        if (this.state.userInput === "Enter Your City's Population") {
            this.setState( {userInput: '' } );
        } else {
            this.setState( {userInput : event.value} );
        }
    }

    rankIt = () => {
        let ranker = 1;
        let notBigger = (
            <div>
                <p>Not in the top 87 Cities.</p> 
                <p>You would need a population of {3002645 - this.state.userInput} more to make the list.</p>
            </div>);
    
        for (let j=0; j<cities.length; j++) {
            
            if (this.state.userInput < cities[j].Population) {
                ranker++;
                
            }
            this.setState( {userRank: ranker} );

            if (this.state.userInput < cities[cities.length - 1].Population) {
            this.setState( {biggerThan: notBigger } );
            } else if (this.state.userInput == cities[ranker - 1].Population) {
                this.setState( {biggerThan: " either " + cities[ranker -1].CityName + "," + cities[ranker -1].Country + " or has an equal population to it." } );
            } else {
            this.setState( {biggerThan: "bigger than " + cities[ranker -1].CityName + "," + cities[ranker -1].Country + " by a population of " + (this.state.userInput - cities[ranker -1].Population) } );
            }
        }
    }

   
    

    render() {

        const textBox = (
            <input 
                type='text' 
                onClick={this.popClear}
                onChange={this.popChanger}
                value={this.state.userInput}
            />
        )       
        
        return (
       
            <div>
                {textBox}
                <button onClick={this.rankIt}>RANK MY CITY</button>
                <p>Your City's Population: {this.state.userInput}</p>
                <p>Your City's Rank: {this.state.userRank}</p>
                <p>Your City is {this.state.biggerThan}</p>
                <Table characterData = {cities} />
            </div>
            
        );


    }
}

export default App;