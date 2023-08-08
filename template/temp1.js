const inputfields = document.querySelector('.input-fields')
const output = document.querySelector('.output')
const btn = document.querySelector('.btn')
const hea = document.querySelector('h1')
const left = document.querySelector('.left')
const cb =  document.querySelector('.sl')
// const ima = document.querySelector('#image')
let inputShow = true

async function TextEditor(element) {
    const newEditor = await ClassicEditor
        .create(element, {
            toolbar: ['heading', 'bold', 'italic', 'bulletedList', 'numberedList', 'blockQuote'],
        })
    return newEditor;

}

let workExpdetails;
TextEditor(inputfields["workexp"]).then(nEditor => {
    workExpdetails = nEditor
})
let Academic;
TextEditor(inputfields["academics"]).then(nEditor => {
    Academic = nEditor
});

function toggle() {
    if (inputShow) {
        inputfields.style.display = "none"
        btn.style.display = "none"
        // left.style.display = "none"
        // left.style.marginTop = '50%';
        hea.style.display = "none"
        inputShow = false
        output.innerHTML = `
           <div class="main">
               <div id="one">
               <h1>${inputfields["name"].value}</h1>
               <h3>${inputfields["Address"].value}</h3>
                 <p>${inputfields["number"].value}</p>
                 <p>${inputfields["email"].value}</p>
                 <br>
                 <h2>Career objective</h2>
                 <p>${inputfields["objective"].value}</p>
                 <br>
                 <h2>Professional experience</h2>
                 ${workExpdetails.getData()}
                 <br>
                 <h2>Academic Qualifications:</h2>
                ${Academic.getData()}<br><br>
               </div>
               <div>
               <div.id="two">
                <h2>Skills:</h2>
                <p>${inputfields["skills"].value}</p><br><br>
                <h1>Personal details</h1>
                <h2> father's name: </h2>
                <p>${inputfields["father's name"].value}</p>
                <h2> date of birth: </h2>
                <p>${inputfields["dob"].value}</p>
                <h2> nationality: </h2>
                <p>${inputfields["nationality"].value}</p>
                <h2> Gender:</h2>
                <p>${inputfields["gender"].value}</p>
              </div>
              </div>
           </div>
           <div class="btn">
              <button onclick="print()">Print Resume</button>
        </div>
         `
    } else {
        inputfields.style.display = "block"
        inputShow = true
        output.innerHTML = ""
    }
}