$(document).ready(function(){
  $('#searchBTN').on('click', function(e){
    let ifsc = $("#searchIFSC").val();
    // Make request to Razorpay
    $.ajax({
      url:' https://ifsc.razorpay.com/'+ifsc,
      error:function (xhr, ajaxOptions, thrownError){
    if(xhr.status==404) {
        alert(thrownError);
    }
	}
    }).done(function(data){
     $('#detail').html(`
        <div class="panel panel-default">
          <div class="panel-heading">
            <h3 class="panel-title">${data.BANK}</h3>
          </div>
          <div class="panel-body">
            <div class="row">
              <ul class="list-group">
              <li class="list-group-item">IFSC : ${data.IFSC}</li>
              <li class="list-group-item">Branch Name : ${data.BRANCH}</li>
                <li class="list-group-item">Address : ${data.ADDRESS}</li>
                <li class="list-group-item">CONTACT : ${data.CONTACT ? data.CONTACT : "NA"}</li>
                <li class="list-group-item">CITY : ${data.CITY}</li>
                 <li class="list-group-item">RTGS : ${data.RTGS ? "Yes" : "No"}</li>
                 <li class="list-group-item">DISTRICT : ${data.DISTRICT}</li>
                  <li class="list-group-item">STATE : ${data.STATE}</li>               
              </ul>
              </div>
            </div>
          </div>
        </div>
      `);
    });
  });
});
