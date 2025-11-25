const body = document.querySelector("body");
//
const form = document.createElement("form");
//
body.append(form);
//
const label1 = document.createElement("label");
//
label1.setAttribute("for", "nama");
//
label1.textContent = "Nama";
//
form.append(label1);
//
const input1 = document.createElement("input");
//
const input1Attribute = {
  type: "text",
  name: "nama",
  id: "nama",
};
// object entrie object jadi array
Object.entries(input1Attribute).forEach(([key, value]) => {
  input1.setAttribute(key, value);
});
input1.setAttribute("autocomplete", "off");
//
form.append(input1);
//
const br1 = document.createElement("br");
//
const br2 = document.createElement("br");
//
form.append(br1, br2);
//
const label2 = document.createElement("label");
//
label2.textContent = "Umur";
//
label2.setAttribute("for", "umur");
//
form.append(label2);
//
const input2 = document.createElement("input");
//
const input2Attribute = {
  type: "number",
  name: "umur",
  id: "umur",
};
//
Object.entries(input2Attribute).forEach(([key, value]) => {
  input2.setAttribute(key, value);
});
//
form.append(input2);
//
const p1 = document.createElement("p");
//
p1.textContent = "Jenis Kelamin";
//
form.append(p1);
//
const input3 = document.createElement("input");

const input3Attribute = {
  type: "radio",
  name: "gender",
  id: "male",
};
//
Object.entries(input3Attribute).forEach(([key, value]) => {
  input3.setAttribute(key, value);
});
//
form.append(input3);
//
const label3 = document.createElement("label");
//
label3.setAttribute("for", "male");
//
label3.textContent = "Laki-laki";
//
form.append(label3);
//
const br3 = document.createElement("br");
//
form.append(br3);
//
const input4 = document.createElement("input");
//
const input4Attribute = {
  type: "radio",
  name: "gender",
  id: "female",
};
//
Object.entries(input4Attribute).forEach(([key, value]) => {
  input4.setAttribute(key, value);
});
//
form.append(input4);
//
const label4 = document.createElement("label");
//
label4.setAttribute("for", "female");
//
label4.textContent = "Perempuan";
//
form.append(label4);
//
const br4 = document.createElement("br");
//
const br5 = document.createElement("br");
//
form.append(br4, br5);
//
const label5 = document.createElement("label");
//
label5.setAttribute("for", "isSmoker");
//
label5.textContent = "Apakah anda seorang perokok?";
//
form.append(label5);
//
const br6 = document.createElement("br");
//
form.append(br6);
//
const select = document.createElement("select");
//
select.name = "isSmoker";
//
select.id = "isSmoker";
//
form.append(select);
//
const option1 = document.createElement("option");
//
option1.disabled = true;
//
option1.selected = true;
//
option1.textContent = "Pilih Jawaban: ";
//
select.append(option1);
//
const option2 = document.createElement("option");
//
option2.value = "ya";
//
option2.textContent = "Ya";
//
select.append(option2);
//
const option3 = document.createElement("option");
//
option3.value = "tidak";
//
option3.textContent = "Tidak";
//
select.append(option3);
//
const p2 = document.createElement("p");
//
p2.textContent = "Brand Rokok yang digunakan: ";
//
form.append(p2);
//
const input5 = document.createElement("input");
//
const input5Attribute = {
  type: "checkbox",
  name: "surya",
  id: "surya",
};
//
Object.entries(input5Attribute).forEach(([key, value]) => {
  input5.setAttribute(key, value);
});
//
form.append(input5);
//
const label6 = document.createElement("label");
//
label6.setAttribute("for", "surya");
//
label6.textContent = "Surya";
//
form.append(label6);
//
const br7 = document.createElement("br");
//
form.append(br7);
//
const input6Attribute = {
  type: "checkbox",
  name: "Marlboro",
  id: "Marlboro",
};
//
const input6 = document.createElement("input");
//
Object.entries(input6Attribute).forEach(([key, value]) => {
  input6.setAttribute(key, value);
});
//
//
const label7 = document.createElement("label");
//
label7.setAttribute("for", "Marlboro");
//
label7.textContent = "Marlboro";
//
const br8 = document.createElement("br");
//
//
const input7 = document.createElement("input");
//
const input7Attribute = {
  type: "checkbox",
  name: "Lucky-strike",
  id: "Lucky-strike",
};
//
Object.entries(input7Attribute).forEach(([key, value]) => {
  input7.setAttribute(key, value);
});
//
const label8 = document.createElement("label");
//
label8.textContent = "Lucky Strike";
//
label8.setAttribute("for", "Lucky-strike");
//
const br9 = document.createElement("br");
//
//
const input8 = document.createElement("input");
//
const input8Attribute = {
  type: "checkbox",
  name: "Dji-sam-soe",
  id: "Dji-sam-soe",
};
//
Object.entries(input8Attribute).forEach(([key, value]) => {
  input8.setAttribute(key, value);
});
//
const label9 = document.createElement("label");
label9.setAttribute("for", "Dji-sam-soe");
label9.textContent = "Dji sam soe";
//
//
const br10 = document.createElement("br");
//
const br11 = document.createElement("br");
//
const button1 = document.createElement("button");
//
button1.type = "submit";
//
button1.textContent = "Submit";

//
const a1 = document.createElement("a");
//
a1.setAttribute("href", "tabelPerokok.html");
//
a1.textContent = "Tabel Perokok";
//
form.append(
  input6,
  label7,
  br8,
  input7,
  label8,
  br9,
  input8,
  label9,
  br10,
  br11,
  button1
);
//
body.append(a1);
//
const br12 = document.createElement("br");
//
//
const a2 = document.createElement("a");
//
a2.setAttribute("href", "index.html");
//
a2.textContent = "Go back";
body.append(br12, a2);

form.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log("Form disubmit!");
});
