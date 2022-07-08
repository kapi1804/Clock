setInterval(() => {
  const d=new Date();
   htime=d.getHours();
   mtime=d.getMinutes();
   stime=d.getSeconds();
   if(htime>12)
   {
    htime=htime-12;
   }
   
   hrotate=htime*30+mtime*0.5;
   mrotate=6*mtime;
   srotate=6*stime;
   hour.style.transform=`rotate(${hrotate}deg)`;
   minute.style.transform=`rotate(${mrotate}deg)`;
   second.style.transform=`rotate(${srotate}deg)`;
}, 1000);