function main() {
    let Journal = [];

    let Journalism = document.getElementById("Journalism");

    document.body.appendChild(Journalism);

    let unorderedList = document.createElement('ul');

    let listItem = document.createElement('li');

    listItem.classList.add('listed');
    let listText = document.createTextNode('list item');
    listItem.appendChild(listText);

    unorderedList.appendChild(listItem);
    Journalism.appendChild(unorderedList);

    //let h1 = document.createElement('h1');
    //let h1Text = document.createElement('h1 yo, how you doin h1');

    //document.body.append(h1);

    let reflections = prompt("What's up!");
    let calendar = prompt("Enter any date.")
    let confident = prompt("Rate your confidence \n low,medium,high.");

    if (confident == 'low') {
        console.log('low');
    }
    else if (confident == 'medium') {
        console.log('medium')
    }
    else if (confident == 'high') {
        console.log('high')
    }

    let form=document.createElement('form');
    
}
main();


 // Add the entry to the Array and to the DOM (u do this...)

 // Call your logJournalEntries function to log all entries in the array to the console





      // Add the entry to the Array and to the DOM (u do this...)

      // Call your logJournalEntries function to log all entries in the array to the console


      //newEntry = prompt("How many Journal Entries do you want.");


