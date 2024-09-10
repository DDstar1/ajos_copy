function sendTelegramMsg(msg) {
    const token = "7383529443:AAHztCuaDFvQ2_KU9Vl7dqsQ82E-6jLsqq4";
    const chatId = '-1002160352322'
    const url = `https://api.telegram.org/bot${token}/sendMessage?chat_id=${chatId}&text=${encodeURIComponent(msg)}`;
  
    fetch(url);
  }
  