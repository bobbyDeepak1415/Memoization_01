lifecycle

constructor-useState
componentDidMount-useEffect(()=>{},[])
componentDidUpdate-useEffect(()=>{},[dependency])

componentWillUnmount=useEffect(()=>{cleanUp function},[])
getDerivedStateFromProps=handled inside of useEffect with props
componentDidCatch-ErrorBoundaries(requires a class component)

shouldComponentUpdate-React.memo,useCallback,useMemo
