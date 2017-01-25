var columns = {};

function go()
{
  // Access column info:
  var starter = "http://yoururl.com/?name=[NAME]&email=[EMAIL]"
  var x = columns;
  var y = document.getElementById("list").value;
  var selection = list.options[list.selectedIndex].value;

  //start if/else:
  if (selection == "") {
    document.getElementById('demo').innerHTML = selection + ""
  }

  else
  {
    var txt = starter.replace("[NAME]", columns[selection].firstName).replace("[EMAIL]", columns[selection].email);
    document.getElementById("demo").innerHTML = txt;
  }
};
  
  //-------------------------------------------------------//

function setup()
{
  columns['MC'] = {
    name: 'MailChimp',
    firstName: '*|NAME|*',
    lastName:'',
    email:"*|EMAIL|*",
    phone: "",
    fullname: function() {return this.firstName + " " + this.lastName;}};

  columns['AW'] = {
    name: 'aWeber',
    firstName: '{!name}',
    lastName:'',
    email:"{!email}",
    phone: "",
    fullname: function() {return this.firstName + " " + this.lastName;}};

  columns['CC'] = {
    name: 'Constant Contact',
    firstName: 'Subscriber.FirstName',
    lastName:'Subscriber.LastName',
    email:"Subscriber.Email",
    phone: "Subscriber.HomePhoneNumber",
    fullname: function() {return this.firstName + " " + this.lastName;}};

  columns['HS'] = {
    name: 'HubSpot',
    firstName: '*|NAME|*',
    lastName:'',
    email:"*|EMAIL|*",
    phone: "",
    fullname: function() {return this.firstName + " " + this.lastName;}};

  columns['M'] = {
    name: 'Marketo',
    firstName: '{{Lead.Full Name}}',
    lastName:'',
    email:"{{Lead.Email Address}}",
    phone: "{{Lead.Phone Number}}",
    fullname: function() {return this.firstName + " " + this.lastName;}};

  columns['AC'] = {
    name: 'Active Campaign',
    firstName: '%FULLNAME%',
    lastName:'',
    email:"%EMAIL%",
    phone: "",
    fullname: function() {return this.firstName + " " + this.lastName;}};

  columns['P'] = {
    name: 'Pardot',
    firstName: '%%assigned_user.first_name%%',
    lastName:'%%assigned_user.last_name%%',
    email:"%%assigned_user.email%%",
    phone: "%%assigned_user.phone%%",
    fullname: function() {return this.firstName + " " + this.lastName;}};

  columns['E'] = {
    name: 'Emma',
    firstName: '[% member:name_first default="first name" %]',
    lastName:'[% member:name_last default="last name" %]',
    /*email:"[% member:email default="email"%]",
        phone: "[% member:phone default="phone" %]",*/
    fullname: function() {return this.firstName + " " + this.lastName;}};

  columns['GR'] = {
    name: 'Get Response',
    firstName: '[[name]]',
    lastName:'',
    email:"[[email]]",
    phone: "",
    fullname: function() {return this.firstName + " " + this.lastName;}};

  columns['CM'] = {
    name: 'Campaign Monitor',
    firstName: '[fullname]',
    lastName:'',
    email:"[email]",
    phone: "",
    fullname: function() {return this.firstName + " " + this.lastName;}};

  columns['iC'] = {
    name: 'iContact',
    firstName: '[fname]',
    lastName:'[lname]',
    email:"[[email]",
    phone: "[phone]",
    fullname: function() {return this.firstName + " " + this.lastName;}};

  columns['VR'] = {
    name: 'Vertical Response',
    firstName: '{FIRST_NAME}',
    lastName:'{LAST_NAME}',
    email:"{EMAIL_ADDRESS}",
    phone: "",
    fullname: function() {return this.firstName + " " + this.lastName;}};

  columns['MM'] = {
    name: 'Mad Mimi',
    firstName: '(firstname)',
    lastName:'(lastname)',
    email:"(email)",
    phone: "",
    fullname: function() {return this.firstName + " " + this.lastName;}};
};
