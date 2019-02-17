import React, {Component} from 'react';
import Table from './Table';
import cities from './Cities';




class App extends Component {

    state = {
        userInput: "Enter Your City's Population",
        userRank: "Enter a Population and Click the Button",   
        biggerThan: "...",
        compare: "bigger than "
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
        let notBigger = (<p>Zero of the Cities on the List</p>);
        for (let j=0; j<cities.length; j++) {
            
            if (this.state.userInput < cities[j].Population) {
                ranker++;
                
            }
            this.setState( {userRank: ranker} );

            if (this.state.userInput < cities[cities.length - 1].Population) {
            this.setState( {biggerThan: notBigger } );
            }
            else {
            this.setState( {biggerThan: cities[ranker -1].CityName } );
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
                <p>Your City is {this.state.compare}{this.state.biggerThan}</p>
                <Table characterData = {cities} />
            </div>
            
        );


    }
}

export default App;