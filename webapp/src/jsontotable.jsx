// json to table 
import $ from 'jquery'; 
// import { useNavigate } from 'react-router-dom';


// function changefunction(){

//     var action_src = $("keywords").val();
//     var your_form = $('your_form').val();

//     var urlLink = "https://ipfs.io/ipfs/";
//     urlLink = urlLink + action_src;

//     your_form.action = urlLink;

// var x = document.getElementById("Form"); 
let url = 'https://ipfs.io/ipfs/QmVXCdAp852utXKF7Gvovn3Bvncegn974j71VTGYUzjnNU';
// let url = 'https://ipfs.io/ipfs/' + 'QmXB2URKS9hTrdDbndsNYA3g8rcmSfC1VPB4kL5z7mUFuN';
// let url = 'https://ipfs.io/ipfs/' + x;

$(document).ready(function(){
    $.getJSON(url, function(data){
        var Patient_record = '';
        
        Patient_record += '<tr>';
        Patient_record += '<td>'+data.PatientID+'</td>';
        Patient_record += '<td>'+data.HospitalName+'</td>';
        Patient_record += '<td>'+data.name+'</td>';
        Patient_record += '<td>'+data.address+'</td>';
        Patient_record += '<td>'+data.ReasonForVisit+'</td>';
        Patient_record += '<td>'+data.LevelOfPain+'</td>';
    // employee_data += '<td>'+value.website+'</td>';
    // employee_data += '<td>'+value.company+'</td>';
        Patient_record += '<tr>';
    
    $('#Patient_record').append(Patient_record);
    });

});