var adult_conference_fee = 130;
var teen_conference_fee = 80;
var child_conference_fee = 80;
var infant_conference_fee = 80;
var teen_room_rate = 640;
var child_room_rate = 462;
var infant_room_rate = 0;
var lodging_deposit = 200;
var parking_conference_rate = 84;

// on form load, update the values to the defaults

$(document).ready(function(){
   updateValues();  
});

// update values any time something in column b changes
$("select").change(function(){
   updateValues(); 
});


function updateValues(){
    
    // update the conference fee
    var adult_conference_fee_total = $("#adults").val() * adult_conference_fee;
    
    // update the room fee
    var adult_room_fee = $("#adults").val() * $("#room-rate").val();
    
    // caluclate the total costs
    var total_adult_cost = adult_conference_fee_total + adult_room_fee;
    
    // amount due at registration
    var adult_due_registration = ( $("#adults").val() * lodging_deposit ) + adult_conference_fee_total;
    
    // balance due on island
    var adult_due_island = adult_room_fee - ( $("#adults").val() * lodging_deposit );
    
    /// TEENS ///
    
    // update the conference fee
    var teen_conference_fee_total = $("#teens").val() * teen_conference_fee;
    
    // update the room fee
    var teen_room_fee = $("#teens").val() * teen_room_rate;
    
    // caluclate the total costs
    var total_teen_cost = teen_conference_fee_total + teen_room_fee;
    
    // amount due at registration
    var teen_due_registration = ( $("#teens").val() * lodging_deposit ) + teen_conference_fee_total;
    
    // balance due on island
    var teen_due_island = teen_room_fee - ( $("#teens").val() * lodging_deposit );
    
    /// CHILDREN ///
    
    // update the conference fee
    var child_conference_fee_total = $("#children").val() * child_conference_fee;
    
    // update the room fee
    var child_room_fee = $("#children").val() * child_room_rate;
    
    // caluclate the total costs
    var total_child_cost = child_conference_fee_total + child_room_fee;
    
    // amount due at registration
    var child_due_registration = ( $("#children").val() * lodging_deposit ) + child_conference_fee_total;
    
    // balance due on island
    var child_due_island = child_room_fee - ( $("#children").val() * lodging_deposit );
    
    /// INFANTS ///
    
    // update the conference fee
    var infant_conference_fee_total = $("#infants").val() * infant_conference_fee;
    
    // update the room fee
    var infant_room_fee = $("#infants").val() * infant_room_rate;
    
    // caluclate the total costs
    var total_infant_cost = infant_conference_fee_total + infant_room_fee;
    
    // amount due at registration
    var infant_due_registration = infant_conference_fee_total;
    
    // balance due on island
    var infant_due_island = infant_room_fee;
    
    /// parking
    var parking = $("#parking").val() * parking_conference_rate;
    
    ///// TOTALS
    
    var total_costs = total_adult_cost + total_teen_cost + total_child_cost + total_infant_cost + parking;
    $("#total-costs").html("$" + numberWithCommas(total_costs));
    
    var total_due_registration = adult_due_registration + teen_due_registration + child_due_registration + infant_due_registration;
    $("#due-on-reg").html("$" + numberWithCommas(total_due_registration));
    
    var total_due_island = adult_due_island + teen_due_island + child_due_island + infant_due_island + parking;
    $("#due-on-island").html("$" + numberWithCommas(total_due_island));
    
}

// simple comma formatter
// from http://stackoverflow.com/questions/2901102/how-to-print-number-with-commas-as-thousands-separators-in-javascript
function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(?:\d{3})+(?!\d))/g, ",");
}