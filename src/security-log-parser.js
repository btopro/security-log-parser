import { LitElement, html, css } from 'lit';


class SecurityLogParser extends LitElement {
  static properties = {
  }

  static styles = css`
       table {
            border-collapse: collapse;
            width: 100%;
        }
  
        th,
        td {
            text-align: left;
            padding: 8px;
        }
  
        tr:nth-child(even) {
            background-color: #7ce2af
        }
  
        th {
            background-color: #7c0f65;
            color: white;
        }
  
        .button {
            position: relative;
            text-align: center;
            padding: 20px;
            border: 4px solid rgb(55, 12, 211);
            background: rgba(20, 192, 4, 0.5);
            color: rgb(230, 36, 78);
            outline: none;
            border-radius: 30px;
            font-size: 30px;
            width: 500px;
  
        }
  
        .button:hover {
            color: black;
            background: white;
        }
  `;

  constructor() {
    super();
  }


  render() {
    return html`
  <body>
    <center>
        <button type="button" class="button" 
            onclick="loadXMLDoc()">
            Get Employees Details
        </button>
    </center>
      
    <br><br>
    <table id="id"></table>
</body>
    `;
  }

  
}

function loadXMLDoc() {
  var xmlhttp = new XMLHttpRequest();
  xmlhttp.onreadystatechange = function () {

      // Request finished and response 
      // is ready and Status is "OK"
      if (this.readyState == 4 && this.status == 200) {
          empDetails(this);
      }
  };

  // employee.xml is the external xml file
  xmlhttp.open("GET", "employee.xml", true);
  xmlhttp.send();
}

function empDetails(xml) {
  var i;
  var xmlDoc = xml.responseXML;
  var table =
      `<tr><th>Firstname</th><th>Lastname</th>
          <th>Title</th><th>Division</th>
          <th>Building</th><th>Room</th>
      </tr>`;
  var x = xmlDoc.getElementsByTagName("employee");

  // Start to fetch the data by using TagName 
  for (i = 0; i < x.length; i++) {
      table += "<tr><td>" +
          x[i].getElementsByTagName("firstname")[0]
          .childNodes[0].nodeValue + "</td><td>" +
          x[i].getElementsByTagName("lastname")[0]
          .childNodes[0].nodeValue + "</td><td>" +
          x[i].getElementsByTagName("title")[0]
          .childNodes[0].nodeValue + "</td><td>" +
          x[i].getElementsByTagName("division")[0]
          .childNodes[0].nodeValue + "</td><td>" +
          x[i].getElementsByTagName("building")[0]
          .childNodes[0].nodeValue + "</td><td>" +
          x[i].getElementsByTagName("room")[0]
          .childNodes[0].nodeValue + "</td></tr>";
  }

  // Print the xml data in table form
  document.getElementById("id").innerHTML = table;
}

customElements.define('security-log-parser', SecurityLogParser);