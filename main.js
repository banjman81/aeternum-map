let admin = false
let currentSelect = ''

$('svg').on('click', 'path',function(){
  console.log($(this).attr('id'))
  if(admin){
    $(this).removeClass('owned')
    $(this).removeClass('faction-owned')
    $(this).removeClass('enemy-owned')
    $(this).addClass(currentSelect)
  }
  else{
    console.log('unauthorize')
  }
})

$('.edit-map').on('click',function(){
  console.log($('.key-in').val())
  if($('.key-in').val() == "adminpass"){
    admin = true
    $('.action-picker').children().remove()
    $('.action-picker').append($(`
        <button class="btn" id="faction-owned">Faction</button>
        <button class="btn" id="owned">Dream Team</button>
        <button class="btn" id="enemy-owned">Enemy</button>
    `))
  }
  else{
    console.log('wrong')
  }
})

$('.action-picker').on('click', 'button', function(){
  console.log($(this).attr('id'))
  currentSelect = $(this).attr('id')
})