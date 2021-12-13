function removeTags(string)
{
    return string.replace(/<[^>]*>/g, ' ').replace(/\s{2,}/g, ' ').trim();
}
