function    rand_color()
{
    var letters;
    var color;
    var i;

    letters = '0123456789ABCDEF';
    color = '#'
    i = 0;
    while (i++ < 6)
        color += letters[Math.floor(Math.random() * 16)];
    return (color);
}

function    make_change()
{
    document.body.style.backgroundColor = rand_color();
}