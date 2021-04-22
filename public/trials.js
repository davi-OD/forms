// Access fields by name
const sur = document.covidReg.surName;
const giv = document.covidReg.givenName;
const dOB = document.covidReg.dob;
const res = document.covidReg.residence;
const occ = document.covidReg.occupation;
const nat = document.covidReg.nation;
const gen = document.covidReg.gender;
const cat = document.covidReg.category;


//Regular Expressions 
const nameRegex = /([A-Za-z]){1,16}/;
const residenceRegex = /([A-Za-z]){1,20}/;
const moreRegex = /([A-Za-z]){5,50}/;
const newRegex = /([A-Z][a-z])/;


//Errors
const surErr = (message)=>{
    let sur_Err = document.getElementById('surEr');
    sur_Err.innerText = message;
}
const givErr = (message)=>{
    let giv_Err = document.getElementById('givenErr');
    giv_Err.innerText = message;
}

const dOBErr = (message)=>{
    let dOB_Err = document.getElementById('dateBrr');
    dOB_Err.innerText = message;
}
const resErr = (message)=>{
    let res_Err = document.getElementById('residenceErr');
    res_Err.innerText = message;
}

const occuErr = (message)=>{
    let occu_Err = document.getElementById('occupErr');
    occu_Err.innerText = message;
}

const natErr = (message)=>{
    let nat_Err = document.getElementById('nationErr');
    nat_Err.innerText = message;
}

const gend_1Err = (message)=>{
    let ma_Err = document.getElementById('gendErr');
    ma_Err.innerText = message;
}


const categoryErr = (message)=>{
    let cat_Err = document.getElementById('categErr');
    cat_Err.innerText = message;
}

//Validations
var surname = () => {
    if (sur.value == '') {
        surErr('Please enter Surname');
        sur.style.border = '2px solid red';
        event.preventDefault();
        sur.focus();
        return false;
    }
    if (sur.value.match(newRegex)) {
        return true;
    }
    else{
        sur.style.border = '2px solid red';
        surErr('Please valid surname starting with a capital letter');
        event.preventDefault();
        sur.focus();
        return false;
    }
};

var given_name = () => {
    if (giv.value == '') {
        givErr('Please enter Given name');
        giv.style.border = '2px solid red';
        event.preventDefault();
        giv.focus();
        return false;
    }
    if (giv.value.match(newRegex)) {
        return true;
    }
    else{
        giv.style.border = '2px solid red';
        givErr('Please valid Given name starting with a capital letter');
        event.preventDefault();
        giv.focus();
        return false;
    }
};

var dateBirth = () => {
    if (dOB.value == '') {
        dOBErr('Please enter your date of birth');
        dOB.style.border = '2px solid red';
        event.preventDefault();
        dOB.focus();
        return false;
    }
    // if (dOB.value.match(nameRegex)) {
    //     return true;
    // }
    // else{
    //     dOB.style.border = '2px solid red';
    //     event.preventDefault();
    //     dOB.focus();
    //     return false;
    // }
};

var resiDence = () => {
    if (res.value == '') {
        resErr('Please enter place of residence');
        res.style.border = '2px solid red';
        event.preventDefault();
        res.focus();
        return false;
    }
    if (res.value.match(residenceRegex)) {
        return true;
    }
    else{
        res.style.border = '2px solid red';
        event.preventDefault();
        res.focus();
        return false;
    }
};

var occupErr = () => {
    if (occ.value == '') {
        occuErr('Please enter your occupation');
        occ.style.border = '2px solid red';
        event.preventDefault();
        occ.focus();
        return false;
    }
    if (occ.value.match(nameRegex)) {
        return true;
    }
    else{
        occ.style.border = '2px solid red';
        event.preventDefault();
        occ.focus();
        return false;
    }
};

var nation_ality = () => {
    if (nat.value == '') {
        natErr('Please enter your nationality');
        nat.style.border = '2px solid red';
        event.preventDefault();
        nat.focus();
        return false;
    }
    if (nat.value.match(nameRegex)) {
        return true;
    }
    else{
        nat.style.border = '2px solid red';
        event.preventDefault();
        nat.focus();
        return false;
    }
};

var genDer = () => {
    if (gen.value === 'default') {
        gend_1Err('Please enter your gender');
        //gen.style.border = '2px solid red';
        event.preventDefault();
        gen.focus();
        return false;
    }
    // if (gen.value.match(nameRegex)) {
    //     return true;
    // }
    // else{
    //     gen.style.border = '2px solid red';
    //     event.preventDefault();
    //     gen.focus();
    //     return false;
    // }
};
    var cateGory = () => {
        if (cat.value === '--Select Category --') {
            categoryErr('Please enter your category');
            //gen.style.border = '2px solid red';
            event.preventDefault();
            cat.focus();
            return false;
        }
};


var validate = ()=>{
    if(surname());
    if(given_name());
    if(dateBirth());
    if(resiDence());
    if(occupErr());
    if(nation_ality());
    if(genDer());
    if(cateGory());
};

document.addEventListener('submit',validate);
