// json to table 
import $ from 'jquery'; 
// import { useNavigate } from 'react-router-dom';

let url = 'https://ipfs.io/ipfs/QmVXCdAp852utXKF7Gvovn3Bvncegn974j71VTGYUzjnNU';
// let url = 'https://ipfs.io/ipfs/' + 'QmXB2URKS9hTrdDbndsNYA3g8rcmSfC1VPB4kL5z7mUFuN';

$(document).ready(function(){
    $.getJSON(url, function(data){
        var Patient_record = '';
        
        Patient_record += '<tr>';
        Patient_record += '<td>'+data.PatientID+'</td>';
        Patient_record += '<td>'+data.HospitalName+'</td>';
        Patient_record += '<td>'+data.name+'</td>';
        Patient_record += '<td>'+data.Address+'</td>';
        Patient_record += '<td>'+data.ReasonForVisit+'</td>';
        Patient_record += '<td>'+data.LevelOfPain+'</td>';
    // employee_data += '<td>'+value.website+'</td>';
    // employee_data += '<td>'+value.company+'</td>';
        Patient_record += '<tr>';
    
    $('#Patient_record').append(Patient_record);
    });

});