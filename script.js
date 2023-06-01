const socialIcons = document.querySelectorAll('.social-icons');

socialIcons.forEach(icon => {
  const originalSrc = icon.src;

  icon.addEventListener('mouseover', function() {
    const srcArray = originalSrc.split('.');
    const extension = srcArray.pop();
    const baseName = srcArray.join('.');
    icon.src = `${baseName}_1.${extension}`;
  });

  icon.addEventListener('mouseout', function() {
    icon.src = originalSrc;
  });
});

let profile = document.querySelector('.pfp');
const s = profile.src;
profile.addEventListener('mouseover', function() {
        profile.src = "assets/pfp.gif";
        console.log('pressed');
});
profile.addEventListener('mouseout', function() {
        profile.src = s;
});

let title = document.querySelector("#name");
title.addEventListener("mouseover", function(){
    title.innerHTML = '<h1>Shubh Sinha</h1>';
});
title.addEventListener('mouseout', function(){
    title.innerHTML = 'Shrudex';
    console.log("done");
});
