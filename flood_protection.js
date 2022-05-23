
const LIMIT = 0
const DIFF = 0
const TIME =0

const floodProtection = (username,message,channelName) => {
{
    let newDate = new Date();
    if(usersMap.has(username))
    {
        const userData = usersMap.get(username);
        const { lastMessage, timer } = userData;
        const difference = newDate.getTime() - lastMessage;
        let msgCount = userData.msgCount;

        if(difference > DIFF)
        {
            clearTimeout(timer);
            userData.msgCount = 1;
            userData.lastMessage = message;
            userData.timer = setTimeout(() =>
            {
                usersMap.delete(nick);
            }, TIME);
            usersMap.set(username, userData)
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
                usersMap.set(username, userData);
            }
        }
    }
    else
    {
        let fn = setTimeout(() =>
        {
            usersMap.delete(username);
        }, TIME);

        usersMap.set(username,
        {
            msgCount: 1,
            lastMessage : newDate.getTime(),
            timer : fn,
        });
    }
});
