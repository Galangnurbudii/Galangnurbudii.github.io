let isValid = {
    name: false,
    email: false,
    phone: false,
    service: false,
    message: false,
};

// Validation
// name
const names = document.getElementById("input-name");
const nameInput = names.getElementsByTagName("input")[0];
const namesDiv = names.getElementsByTagName("div");

nameInput.addEventListener("click", () => {
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

// Email
const email = document.getElementById("input-email");
const emailInput = email.getElementsByTagName("input")[0];
const emailDiv = email.getElementsByTagName("div");

emailInput.addEventListener("click", () => {
    emailInput.style.color = "white";
});

email.addEventListener("focusout", () => {
    const str = emailInput.value;
    if (
        ((str.charCodeAt(0) >= 65 && str.charCodeAt(0) <= 90) ||
            (str.charCodeAt(0) >= 48 && str.charCodeAt(0) <= 57) ||
            (str.charCodeAt(0) >= 97 && str.charCodeAt(0) <= 122)) &&
        !str.includes(" ") &&
        str.split("@").length == 2 &&
        str.includes(".") &&
        ((str.split("@")[1].charCodeAt(0) >= 65 &&
            str.split("@")[1].charCodeAt(0) <= 90) ||
            (str.charCodeAt(0) >= 48 && str.charCodeAt(0) <= 57) ||
            (str.split("@")[1].charCodeAt(0) >= 97 &&
                str.split("@")[1].charCodeAt(0) <= 122)) &&
        ((str.charCodeAt(str.length - 1) >= 65 &&
            str.charCodeAt(str.length - 1) <= 90) ||
            (str.charCodeAt(0) >= 48 && str.charCodeAt(0) <= 57) ||
            (str.charCodeAt(str.length - 1) >= 97 &&
                str.charCodeAt(str.length - 1) <= 122))
    ) {
        isValid["email"] = true;
        emailDiv[1].style.display = "none";
        emailInput.style.borderColor = "#7d7f83";
        emailDiv[0].style.color = "#7d7f83";
    } else {
        emailInput.style.color = "red";
        emailInput.style.borderColor = "red";
        emailDiv[0].style.color = "red";
        emailDiv[1].style.display = "inherit";
        isValid["email"] = false;
    }
});

// Phone Number
const phoneNumber = document.getElementById("input-phoneNumber");
const phoneNumberInput = phoneNumber.getElementsByTagName("input")[0];
const phoneNumberDiv = phoneNumber.getElementsByTagName("div");

phoneNumberInput.addEventListener("focus", () => {
    phoneNumberInput.style.color = "white";
});

phoneNumber.addEventListener("focusout", () => {
    phoneNumberInput.value = parseFloat(phoneNumberInput.value).toString();
    if (
        phoneNumberInput.value.length < 12 ||
        phoneNumberInput.value.length > 14 ||
        !phoneNumberInput.value.startsWith("62", 0)
    ) {
        isValid["phone"] = false;
        phoneNumberDiv[0].style.color = "red";
        phoneNumberDiv[1].style.display = "inherit";
        phoneNumberInput.style.color = "red";
        phoneNumberInput.style.borderColor = "red";
    } else {
        phoneNumberInput.style.borderColor = "#7d7f83";
        phoneNumberDiv[0].style.color = "#7d7f83";
        phoneNumberDiv[1].style.display = "none";
        isValid["phone"] = true;
    }
});

// Service
const listId = ["service"];

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

const message = document.getElementById("textArea");
const messageText = message.getElementsByTagName("textarea")[0];
const messageDiv = message.getElementsByTagName("div");

messageText.addEventListener("focus", () => {
    messageText.style.color = "white";
});

message.addEventListener("focusout", () => {
    if (messageText.value == "") {
        isValid["message"] = false;
        messageDiv[0].style.color = "red";
        messageDiv[1].style.display = "inherit";
        messageText.style.color = "red";
        messageText.style.borderColor = "red";
    } else {
        messageText.style.borderColor = "#7d7f83";
        messageDiv[0].style.color = "#7d7f83";
        messageDiv[1].style.display = "none";
        isValid["message"] = true;
    }
});

const submitButton = document.getElementById("submit");

window.addEventListener("click", () => {
    if (Object.values(isValid).includes(false)) {
        submitButton.className = "disabled";
        submitButton.disabled = true;
    } else {
        submitButton.className = "button";
        submitButton.disabled = false;
    }
});

submitButton.addEventListener("click", () => {
    popup.style.display = "inherit";
});
