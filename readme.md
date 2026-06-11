lifecycle

constructor-useState
componentDidMount-useEffect(()=>{},[])
componentDidUpdate-useEffect(()=>{},[dependency])
componentWillUnMount-useEffect(()=>{()=>cleanUp function},[dependency])

shouldComponentUnMount-React.Memo,UseCallback,useMemo

getDerivedStateFromProps-handled in useEffect by passing props

componentDidCatch-error Boundary (class component)