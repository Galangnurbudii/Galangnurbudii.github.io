let isValid = {
    name: false,
    location: false,
    reservationType: false,
    numberOfPeople: false,
    phoneNumber: false,
    date: false,
    time: false,
};

const listId = ["location", "reservationType", "time"];

listId.forEach((id) => {
    let elemntDiv = document.getElementById(id).getElementsByTagName("div");
    let dropdown = document.getElementById(id + "Dropdown");
    let dropdownBox = document.getElementById(id + "DropdownBox");
    let dropdownArrow = document.getElementById(id + "DropdownArrow");
    let dataList = Array.from(dropdownBox.getElementsByTagName("div"));
    dropdown.addEventListener("click", () => {
        if (dropdownBox.className == "dropdown-box") {
            dropdownBox.style.display = "inherit";
            setTimeout(() => {
                dropdownBox.className = "dropdown-box active";
                dropdownArrow.style =
                    "transform:rotate(180deg);transition:0.5s;";
            }, 10);
        } else {
            dropdownBox.className = "dropdown-box";
            dropdownArrow.style = "transition:0.5s;";
            setTimeout(() => {
                dropdownBox.style.display = "none";
            }, 100);
            dropdown.style.borderColor = "red";
            elemntDiv[0].style.color = "red";
            elemntDiv[2].style.display = "inherit";
        }
    });

    dataList.forEach((data) => {
        data.addEventListener("click", () => {
            validateDropdown(id, dropdown, elemntDiv);
            dropdownBox.className = "dropdown-box";
            dropdownArrow.style = "transition:0.5s;";
            dropdownBox.style.display = "none";
            dropdown.getElementsByTagName("p")[0].innerHTML =
                data.getElementsByTagName("label")[0].innerHTML;
            dropdown.getElementsByTagName("p")[0].style = "color: white;";
            dropdown.style.borderColor = "#7d7f83";
            elemntDiv[0].style.color = "#7d7f83";
            elemntDiv[2].style.display = "none";
        });
    });
});

// Validation
// name
const names = document.getElementById("input-name");
const nameInput = names.getElementsByTagName("input")[0];
const namesDiv = names.getElementsByTagName("div");

nameInput.addEventListener("focus", () => {
    nameInput.style.color = "white";
});

nameInput.addEventListener("focusout", () => {
    if (nameInput.value.length < 2 || nameInput.value == "") {
        nameInput.style.color = "red";
        nameInput.style.borderColor = "red";
        namesDiv[0].style.color = "red";
        namesDiv[1].style.display = "inherit";
        isValid["name"] = false;
    } else {
        isValid["name"] = true;
        namesDiv[1].style.display = "none";
        nameInput.style.borderColor = "#7d7f83";
        namesDiv[0].style.color = "#7d7f83";
    }
});

// Validation for all dropdown
function validateDropdown(id, dropdown, elemntDiv) {
    let optionList = document.getElementsByName(id);
    isValid[id] = dropdownCheck(optionList);
    if (!isValid[id]) {
        dropdown.style.borderColor = "red";
        elemntDiv[0].style.color = "red";
        elemntDiv[2].style.display = "inherit";
    } else {
        dropdown.style.borderColor = "#7d7f83";
        elemntDiv[0].style.color = "#7d7f83";
        elemntDiv[2].style.display = "none";
    }
}

function dropdownCheck(optionList) {
    for (let option of optionList) {
        if (option.checked) {
            return true;
        }
    }
    return false;
}

// Number of people
const numberOfPeople = document.getElementById("input-numberOfPeople");
const numberOfPeopleInput = numberOfPeople.getElementsByTagName("input")[0];
const numberOfPeopleDiv = numberOfPeople.getElementsByTagName("div");

numberOfPeopleInput.addEventListener("focus", () => {
    numberOfPeopleInput.style.color = "white";
});

numberOfPeopleInput.addEventListener("focusout", () => {
    if (
        parseInt(numberOfPeopleInput.value) < 1 ||
        parseInt(numberOfPeopleInput.value) > 50 ||
        numberOfPeopleInput.value == ""
    ) {
        isValid["numberOfPeople"] = false;
        numberOfPeopleInput.style.color = "red";
        numberOfPeopleInput.style.borderColor = "red";
        numberOfPeopleDiv[0].style.color = "red";
        numberOfPeopleDiv[1].style.display = "inherit";
    } else {
        isValid["numberOfPeople"] = true;
        numberOfPeopleInput.style.borderColor = "#7d7f83";
        numberOfPeopleDiv[0].style.color = "#7d7f83";
        numberOfPeopleDiv[1].style.display = "none";
    }
});

// Phone number
const phoneNumber = document.getElementById("input-phoneNumber");
const phoneNumberInput = phoneNumber.getElementsByTagName("input")[0];
const phoneNumberDiv = phoneNumber.getElementsByTagName("div");

phoneNumberInput.addEventListener("focus", () => {
    phoneNumberInput.style.color = "white";
});

phoneNumber.addEventListener("focusout", () => {
    if (phoneNumberInput.value.startsWith("08", 0)) {
        phoneNumberInput.value = "628" + phoneNumberInput.value.substring(2);
    }
    phoneNumberInput.value = parseFloat(phoneNumberInput.value).toString();
    if (
        phoneNumberInput.value.length < 12 ||
        phoneNumberInput.value.length > 14 ||
        !phoneNumberInput.value.startsWith("62", 0)
    ) {
        isValid["phoneNumber"] = false;
        phoneNumberDiv[0].style.color = "red";
        phoneNumberDiv[1].style.display = "inherit";
        phoneNumberInput.style.color = "red";
        phoneNumberInput.style.borderColor = "red";
    } else {
        phoneNumberInput.style.borderColor = "#7d7f83";
        phoneNumberDiv[0].style.color = "#7d7f83";
        phoneNumberDiv[1].style.display = "none";
        isValid["phoneNumber"] = true;
    }
});

// date
const date = document.getElementById("input-date");
const dateInput = date.getElementsByTagName("input")[0];
const dateDiv = date.getElementsByTagName("div");

dateInput.addEventListener("focus", () => {
    dateInput.style.color = "white";
});

dateInput.addEventListener("focusout", () => {
    let dateFormat = new Date(dateInput.value);
    // alert();
    if (isNaN(dateFormat) || dateFormat < new Date()) {
        isValid["date"] = false;
        dateInput.style.borderColor = "red";
        dateInput.style.color = "red";
        dateDiv[0].style.color = "red";
        dateDiv[1].style.display = "inherit";
    } else {
        isValid["date"] = true;
        dateInput.style.borderColor = "#7d7f83";
        dateDiv[0].style.color = "#7d7f83";
        dateDiv[1].style.display = "none";
    }
});

const submitButton = document.getElementById("submit");

window.addEventListener("click", () => {
    if (Object.values(isValid).includes(false)) {
        submitButton.className = "disabled";
        console.log(isValid);
        submitButton.disabled = true;
    } else {
        submitButton.className = "button";
        submitButton.disabled = false;
    }
});

submitButton.addEventListener("click", () => {
    popup.style.display = "inherit";
});
