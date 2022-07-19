$(document).ready(function() {
  $('.addBtn').click(function() {
    console.log('this');
    let inputValue = $('#newtask').val();
    if (inputValue != '') {
      let id = `task${Date.now()}`;
      let $div = $('<div>', {"class": "task", "id": `${id}`}); 
      let $span = $('<span>', {"class": "closeBtn"});
      $span.click(function() {
        if(confirm(`Are you sure you want to delete this ${id}`))
        {
          delete_cookie($(this).parent().attr('id'), $(this).parent().text());
          console.log($(this).parent().attr('id'));
          $div.remove();
        }
      });
      $span.append('x');
      $div.append(inputValue);
      $div.append($span);
      $('#ft_list').prepend($div);
      setCookie(id, inputValue);
      $('#newtask').val('');
    } else {
      alert('Please input something.');
    }
  })

  checkCookie();
})

// Below are for cookie
function  setCookie(cname, cvalue) {
  document.cookie = cname + '=' + cvalue;
  var date = new Date();
  date.setMonth(date.getYear()+1);
  document.cookie += ('; expires='+date.toUTCString());
}

function checkCookie() {
  var cookies = document.cookie.split('; ');
  console.log(cookies);
  cookies.sort();
  for (var i=0; i<cookies.length; i++) 
  {
    var part = cookies[i].split('=');
    if(part[0].indexOf('task')===0)
    {
      try
      {
        var inputValue = part[1];
        let $div = $('<div>', {"class": "task", "id": `${part[0]}`}); 
        let $span = $('<span>', {"class": "closeBtn"});
        $span.click(function() {
          if(confirm(`Are you sure you want to delete this ${$(this).parent().attr('id')}`))
          {
            delete_cookie($(this).parent().attr('id'), $(this).parent().text());
            $div.remove();
          }
        });
        $span.append('x');
        $div.append(inputValue);
        $div.append($span);
        $('#ft_list').prepend($div);
      }
      catch(error){
        console.log(error.message+' '+part[1]);
      }
    }
  }
}

function delete_cookie(cname,value) {
  console.log(cname + "=" + value);
	document.cookie = cname + '=; expires=Fri, 31 Dec 1999 23:59:59 GMT;';
}