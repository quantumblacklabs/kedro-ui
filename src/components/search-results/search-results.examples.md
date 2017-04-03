## SearchResults component demos

Search results component, usually used alongside a search input.

```
<div>
    <input type='search' placeholder='Search' style={{ display:'block', width:'300px', padding: '5px', fontSize:'20px' }} onChange={e => console.log(e.target.value)} />
    <SearchResults />
</div>
```
