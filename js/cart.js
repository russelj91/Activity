let addItemId = 0;


    function addToCart(item) {
      addItemId += 1;

      let selectedItem = document.createElement('div');
      selectedItem.classList.add('cartImg');
      selectedItem.setAttribute('id', addItemId);

      let img = document.createElement('img');
      img.setAttribute('src', item.children[0].currentSrc);

      let title = document.createElement('div');
      title.innerText = item.children[1].innerText;

      let label = document.createElement('div');
      label.innerText = item.children[0].innerText;
      let delBtn = document.createElement('button');

      delBtn.innerText = 'Delete';
      delBtn.setAttribute('onclick','del('+addItemId+')');

      let cartItems = document.getElementById('title');
      document.getElementById("title").style.fontStyle = "italic";
      
      selectedItem.append(img);
      selectedItem.append(title);
      selectedItem.append(label);
      selectedItem.append(delBtn);
      cartItems.append(selectedItem);

    }

    function del(item){
        document.getElementById(item).remove();
     
    }


    function noTice() {
      alert("Reminder before proceeding! \n 1.Remember that refreshing this page without logging in  will remove the Save Courses! \n 2.Remember the courses before deleting!");
    }




  let image = document.querySelector('#imgClickAndChange');
    
  function changeImage() {
      image.src = 'red.gif';
  }

  


