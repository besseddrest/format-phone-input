// add event listener on input
// take current value, format, then display new value to user
// only digits should be values in field
// - eg, user can't delete formatting () -

// add event listener for keyUp
// format phone number and replace value, maybe small debounce
// update phone number value field
// if user types or deletes formatting char, accept it and process as needed

const phoneField = document.getElementById('phone');
phoneField.addEventListener('keyup', handleKeyUp);

let numbers = [];
const other = [];
const specials = '()- ';
let formatted = '';

function handleKeyUp(ev) {
  if (numbers.length === 10) {
    ev.preventDefault();
    return;
  }

  const val = ev.target.value;
  const char = val.charAt(val.length - 1);
  const key = ev.which || ev.charCode;
  if (key === 8 || key === 46) {
    if (val.length === 0) {
      formatted = '';
      numbers = [];
    } else {
      handleDelete(formatted);
    }
    return;
  }
  let area, first, last;
  area = first = last = '';

  formatPhone(val, char, area, first, last);
}

function formatPhone(val, char, area, first, last) {
  
  if (char && !isNaN(char)) {
    numbers.push(char);

    if (numbers.length === 3) {
      area = numbers.slice(0, 3).join('');
      formatted = `(${val})`;
      phoneField.value = formatted;
    }
  
    if (numbers.length === 6) {
      area = numbers.slice(0, 3).join('');
      first = numbers.slice(3).join('');
      formatted = `(${area}) ${first}-`;
      phoneField.value = formatted;
    }
  
    if (numbers.length > 6) {
      area = numbers.slice(0, 3).join('');
      first = numbers.slice(3, 6).join('');
      last = numbers.slice(6).join('');
      formatted = `(${area}) ${first}-${last}`;
      phoneField.value = formatted;
    }  
  }


};

const handleDelete = (val) => {
  const lastIndex = formatted.length - 1;
  const last = formatted.charAt(lastIndex);

  if (specials.indexOf(last) === -1) {
    numbers.pop();
  }

  phoneField.value = formatted.substring(0, lastIndex);
};


const handleNonNumber = () => {};