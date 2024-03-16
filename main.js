let displayValue = '';
var theme = true;

function appendDisplay(value) 
{
    if (value === '=') // if pressed '=' calculade
    {
        try 
        {
            displayValue = eval(displayValue); // calculaded 
            if (isNaN(displayValue) === true) // Result is NaN
            {
                document.getElementById('result').value = "Error"; // Change the text to Error
            }

            else
            {
                document.getElementById('result').value = displayValue; // changed value
            }
        } 
        
        catch (error) 
        {
            document.getElementById('result').value = 'Error'; // for any error
        }
    }
    
    else 
    {
        displayValue += value; // append value to displayValue
        document.getElementById('result').value = displayValue; // changed value
    }
}

function deleteAChar() 
{
    let dsplyStr = document.getElementById('result').value;
    if (dsplyStr.length > 0) 
    {
        document.getElementById('result').value = dsplyStr.slice(0, -1);
        displayValue = dsplyStr.slice(0, -1);
    }
}


function clearDisplay() 
{
    displayValue = '';
    document.getElementById('result').value = displayValue;
}

function changeTheme()
{
    if (theme === true)
    {
        theme = false; // is not dark mode
        document.body.style.backgroundColor = "white";

        document.getElementById('theme').style.color = 'black';
        document.getElementById('theme').style.backgroundColor = 'black';

        document.getElementById('result').style.color = 'black';
        document.getElementById('result').style.backgroundColor = '#939393';
        const buttons = document.querySelectorAll("#button");
        for (const button of buttons) 
        {
            button.style.backgroundColor = "#B2B2B2";
            button.style.color = "black";
        }
    }

    else
    {
        theme = true; // is not light mode
        document.body.style.backgroundColor = "black";

        document.getElementById('theme').style.color = 'white';
        document.getElementById('theme').style.backgroundColor = 'white';

        document.getElementById('result').style.color = 'white';
        document.getElementById('result').style.backgroundColor = 'rgb(34, 34, 34)';

        const buttons = document.querySelectorAll("#button");
        for (const button of buttons) 
        {
            button.style.backgroundColor = "#222222";
            button.style.color = "white";
        }
    }
}