var adult_conference_fee = 100;
var teen_conference_fee = 75;
var teen_room_rate = 640;
var child_conference_fee = 75;
var child_room_rate = 462;
var infant_conference_fee = 75;
var infant_room_rate = 0;
var lodging_deposit = 200;

// on form load, update the values to the defaults

$(document).ready(function(){
   updateValues();  
});

// update values any time something in column b changes
$(".col-b").change(function(){
   updateValues(); 
});

// or when someone changes the room rate
$("#room-rate").change(function(){
   updateValues(); 
});

function updateValues(){
    
    console.log($("#adults").val());
    
    // update the conference fee
    var adult_conference_fee_total = $("#adults").val() * adult_conference_fee;
    $("#adult-row .col-c").html("$" + numberWithCommas(adult_conference_fee_total));
    
    // update the room fee
    var adult_room_fee = $("#adults").val() * $("#room-rate").val();
    $("#adult-row .col-d").html("$" + numberWithCommas(adult_room_fee));
    
    // caluclate the total costs
    var total_adult_cost = adult_conference_fee_total + adult_room_fee;
    $("#adult-row .col-e").html("$" + numberWithCommas(total_adult_cost));
    
    // amount due at registration
    var adult_due_registration = ( $("#adults").val() * lodging_deposit ) + adult_conference_fee_total;
    $("#adult-row .col-f").html("$" + numberWithCommas(adult_due_registration));
    
    // balance due on island
    var adult_due_island = adult_room_fee - ( $("#adults").val() * lodging_deposit );
    $("#adult-row .col-g").html("$" + numberWithCommas(adult_due_island));
    
    /// TEENS ///
    
    // update the conference fee
    var teen_conference_fee_total = $("#teens").val() * teen_conference_fee;
    $("#teen-row .col-c").html("$" + numberWithCommas(teen_conference_fee_total));
    
    // update the room fee
    var teen_room_fee = $("#teens").val() * teen_room_rate;
    $("#teen-row .col-d").html("$" + numberWithCommas(teen_room_fee));
    
    // caluclate the total costs
    var total_teen_cost = teen_conference_fee_total + teen_room_fee;
    $("#teen-row .col-e").html("$" + numberWithCommas(total_teen_cost));
    
    // amount due at registration
    var teen_due_registration = ( $("#teens").val() * lodging_deposit ) + teen_conference_fee_total;
    $("#teen-row .col-f").html("$" + numberWithCommas(teen_due_registration));
    
    // balance due on island
    var teen_due_island = teen_room_fee - ( $("#teens").val() * lodging_deposit );
    $("#teen-row .col-g").html("$" + numberWithCommas(teen_due_island));
    
    /// CHILDREN ///
    
    // update the conference fee
    var child_conference_fee_total = $("#children").val() * child_conference_fee;
    $("#child-row .col-c").html("$" + numberWithCommas(child_conference_fee_total));
    
    // update the room fee
    var child_room_fee = $("#children").val() * child_room_rate;
    $("#child-row .col-d").html("$" + numberWithCommas(child_room_fee));
    
    // caluclate the total costs
    var total_child_cost = child_conference_fee_total + child_room_fee;
    $("#child-row .col-e").html("$" + numberWithCommas(total_child_cost));
    
    // amount due at registration
    var child_due_registration = ( $("#children").val() * lodging_deposit ) + child_conference_fee_total;
    $("#child-row .col-f").html("$" + numberWithCommas(child_due_registration));
    
    // balance due on island
    var child_due_island = child_room_fee - ( $("#children").val() * lodging_deposit );
    $("#child-row .col-g").html("$" + numberWithCommas(child_due_island));
    
    /// INFANTS ///
    
    // update the conference fee
    var infant_conference_fee_total = $("#infants").val() * infant_conference_fee;
    $("#infant-row .col-c").html("$" + numberWithCommas(infant_conference_fee_total));
    
    // update the room fee
    var infant_room_fee = $("#infants").val() * infant_room_rate;
    $("#infant-row .col-d").html("$" + numberWithCommas(infant_room_fee));
    
    // caluclate the total costs
    var total_infant_cost = infant_conference_fee_total + infant_room_fee;
    $("#infant-row .col-e").html("$" + numberWithCommas(total_infant_cost));
    
    // amount due at registration
    var infant_due_registration = infant_conference_fee_total;
    $("#infant-row .col-f").html("$" + numberWithCommas(infant_due_registration));
    
    // balance due on island
    var infant_due_island = infant_room_fee;
    $("#infant-row .col-g").html("$" + numberWithCommas(infant_due_island));
    
    ///// TOTALS
    
    var total_costs = total_adult_cost + total_teen_cost + total_child_cost + total_infant_cost;
    $("#totals-row .col-e").html("$" + numberWithCommas(total_costs));
    
    var total_due_registration = adult_due_registration + teen_due_registration + child_due_registration + infant_due_registration;
    $("#totals-row .col-f").html("$" + numberWithCommas(total_due_registration));
    
    var total_due_island = adult_due_island + teen_due_island + child_due_island + infant_due_island;
    $("#totals-row .col-g").html("$" + numberWithCommas(total_due_island));
    
}

// simple comma formatter
// from http://stackoverflow.com/questions/2901102/how-to-print-number-with-commas-as-thousands-separators-in-javascript
function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(?:\d{3})+(?!\d))/g, ",");
}