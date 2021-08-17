var _CountingVar;

function _StartCount()
{
    IntervalID1172 = setInterval(_CountImmediate.bind(null,1),1000);
}

function _StopAndSave(_Param1,_Param2,_Param3,_Param4)
{
    if(Boolean(_Param4))
    {
        const Status = SQLOperations.Insert(_Param1,_Param2,_Param3);
        clearInterval(IntervalID1172);
       _CountingVar = 0;
    }
    else
    {
        clearInterval(IntervalID1172);
        _CountingVar = 0;
    }
  
  return Status ? true : false;
}

function _CountImmediate(Check)
{
    if (!Boolean(Check)) return;
    _CountingVar++;
}
