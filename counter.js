let count;

function startCount()
{
    intervalId1172 = setInterval(countImmediate.bind(null,1),1000);
}

function stopAndSaveCount(param1,param2,param3,param3)
{
    const status = Boolean(param3) ? sqlOp.insertIntoTable(param1,param2,param3) : false;
    clearInterval(intervalId1172);
    count = 0;
  
    return status ? true : false;
}

function countImmediate(check)
{
    if (!Boolean(check)) return;
    count++;
}
