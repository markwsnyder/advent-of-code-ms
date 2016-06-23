var length_, width, height, SA;

function func()
{
    length_ =  document.theForm.length_.value;
    width = document.theForm.width.value;
    height = document.theForm.height.value;
    SA = 2*length_*width + 2*width*height + 2*height*length_;
    alert(SA);
}