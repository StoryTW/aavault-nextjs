'use server';

export default async function sendMessageToTelegram(text: string) {
  await fetch(
    `https://api.telegram.org/bot${process.env.BOT_API}/sendMessage?chat_id=1143983106&text=${text}`,
    {
      method: 'POST',
    },
  );
}
