
const LIMIT = parseInt(FloodBilgileri._Limit);
const DIFF = parseInt(FloodBilgileri._Diff);
const TIME = parseInt(FloodBilgileri._Sure);

function SpamKorumasi(nick,mesaj,KanalAdi)
{
    let Tarih = new Date();
    if(usersMap.has(nick))
    {
        const userData = usersMap.get(nick);
        const { lastMessage, timer } = userData;
        const difference = Tarih.getTime() - lastMessage;
        let msgCount = userData.msgCount;

        if(difference > DIFF)
        {
            clearTimeout(timer);
            userData.msgCount = 1;
            userData.lastMessage = mesaj;
            userData.timer = setTimeout(() =>
            {
                usersMap.delete(nick);
            }, TIME);
            usersMap.set(nick, userData)
        }
        else
        {
            ++msgCount;
            if(parseInt(msgCount) === LIMIT)
            {
               console.log("Spam detected");
            }
            else
            {
                userData.msgCount = msgCount;
                usersMap.set(nick, userData);
            }
        }
    }
    else
    {
        let fn = setTimeout(() =>
        {
            usersMap.delete(nick);
        }, TIME);

        usersMap.set(nick,
        {
            msgCount: 1,
            lastMessage : Tarih.getTime(),
            timer : fn,
        });
    }
}
