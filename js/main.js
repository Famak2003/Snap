// ========== FEATURES AND COMPANY DROPDOWN ==========

const features = document.querySelector(".features");
const feautues_dropDown = document.querySelector(".fdropdown");
const feautures_imgup = document.querySelector(".farrowUp");
const features_imgdown = document.querySelector(".farrowDown");


let featGuide = false;
features.addEventListener("click", function() {
    featGuide = !featGuide;

    if (featGuide === true) {
        feautues_dropDown.style.display = "flex";
        features_imgdown.style.display = "none";
        feautures_imgup.style.display = "inline-block"
    } else {
        feautues_dropDown.style.display = "none";
        features_imgdown.style.display = "inline-block";
        feautures_imgup.style.display = "none"
    }
})

const company = document.querySelector(".company");
const company_dropDown = document.querySelector(".cdropdown");
const company_imgup = document.querySelector(".carrowUp");
const company_imgdown = document.querySelector(".carrowDown");

let compGuide = false;
company.addEventListener("click", function() {
    compGuide = !compGuide;

    if (compGuide === true) {
        company_dropDown.style.display = "flex";
        company_imgdown.style.display = "none";
        company_imgup.style.display = "inline-block"
    } else {
        company_dropDown.style.display = "none";
        company_imgdown.style.display = "inline-block";
        company_imgup.style.display = "none"
    }
})



// ========= MOBILE DROPDOWN =========


function openNav() {
    document.querySelector('.mobile_bar').style.transform = 'translateX(0)';
    document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
    document.querySelector('.left_btn button').style.color = "rgba(0,0,0,0.4)"

}

function closeNav() {
    document.querySelector('.mobile_bar').style.transform = 'translateX(30rem)';
    document.querySelector('.left_btn button').style.color = "white"
    document.body.style.backgroundColor = 'white'
}






// ======= FEATURES AND COMPANY MOBILE DROPDOWN =======


let mfeatGuide = false;
const mf = document.querySelector('.m_features');
mf.addEventListener('click', () => {
    mfeatGuide = !mfeatGuide;

    const m_f_drop = document.querySelector('.m_features_dd')
    const mfad = document.querySelector('.mfad')
    const mfau = document.querySelector('.mfau')
    m_f_drop.classList.toggle('m_features_dd_active');

    if (mfeatGuide === true) {
        mfad.style.display = 'none'
        mfau.style.display = 'inline-block'
    } else {
        mfad.style.display = 'inline-block'
        mfau.style.display = 'none'
    }


});


let mcompanyGuide = false;
const mc = document.querySelector('.m_company');
mc.addEventListener('click', () => {
    mcompanyGuide = !featGuide;

    const m_c_drop = document.querySelector('.m_company_dd')
    const mcad = document.querySelector('.mcad')
    const mcau = document.querySelector('.mcau')
    m_c_drop.classList.toggle('m_company_dd_active');

    if (mcompanyGuide === true) {
        mcad.style.display = 'none'
        mcau.style.display = 'inline-block'
    } else {
        mcad.style.display = 'inline-block'
        mcau.style.display = 'none'
    }
});