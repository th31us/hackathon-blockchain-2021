











fetch('people.json')//file json objects
            .then(function (response) {
                return response.json();
            })
            .then(function (data) {
                appendData(data);
            })
            .catch(function (err) {
                console.log('error: ' + err);
            });
        function appendData(data) {
            var mainContainer = document.getElementById("myData");
            for (var i = 0; i < data.length; i++) {
                var div = document.createElement("div");
                div.innerHTML = 'Name: ' + data[i].firstName + ' ' + data[i].lastName;
                mainContainer.appendChild(div);
            }
        }

        https://dweb.link/ipfs/bafybeib5tczcazjdhnt3rfs45lxec2nwgwimgxtkcp6anzpn57v4xf4p6m/test_data.csv


        import React from 'react';
import 'react-dropdown/style.css'
import 'react-table/react-table.css'
import ReactTable from "react-table";
import {CSVLink} from "react-csv";

const columns = [
   {
       Header: 'name',
       accessor: 'name', // String-based value accessors!
   },
   {
       Header: 'age',
       accessor: 'age',

  }]
class AllPostPage extends React.Component {
    constructor(props) {
       super(props);
       this.download = this.download.bind(this);
       this.state = {
          tableproperties: {
             allData: [
                {"name": "ramesh","age": "12"},
                {"name": "bill","age": "13"},
                {"name": "arun","age": "9"},
                {"name": "kathy","age": "21"}
             ]
          },
          dataToDownload: []
       };
    }

   download(event) {
      const currentRecords = this.reactTable.getResolvedState().sortedData;
      var data_to_download = []
      for (var index = 0; index < currentRecords.length; index++) {
         let record_to_download = {}
         for(var colIndex = 0; colIndex < columns.length ; colIndex ++) {
            record_to_download[columns[colIndex].Header] = currentRecords[index][columns[colIndex].accessor]
         }
         data_to_download.push(record_to_download)
      }
      this.setState({ dataToDownload: data_to_download }, () => {
         // click the CSVLink component to trigger the CSV download
         this.csvLink.link.click()
      })
    } 

    render() {
       return <div>
                 <div>
                    <button onClick={this.download}>
                        Download
                    </button>
                 </div>
                 <div>
                    <CSVLink
                        data={this.state.dataToDownload}
                        filename="data.csv"
                        className="hidden"
                        ref={(r) => this.csvLink = r}
                        target="_blank"/>

                 </div>
                 <div>
                    <ReactTable ref={(r) => this.reactTable = r}
                                data={this.state.tableproperties.allData} columns={columns} filterable
                                defaultFilterMethod={(filter, row) =>
                                    String(row[filter.id]).toLowerCase().includes(filter.value.toLowerCase())}
                    />
                 </div>
              </div>
    }
}

export default AllPostPage;