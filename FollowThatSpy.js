function findRoutes(routes) {
  let trace =[]
  
  const findStart = function(route1, route2) {
    return route1.reduce((acc,point,i)=>{
    if(!route2.includes(point)){
      return [...acc,point,route2[i]]
    }
    return acc
  },[])
  }
  
  const expectedStarts = routes.map((currentPoints)=>currentPoints[0])
  const expectedEnds = routes.map((currentPoints)=>currentPoints[1])
 
  const startPoint =  findStart(expectedStarts,expectedEnds)
  
  trace=[...startPoint]
  
  let middleRoutes = routes.filter((currentPoints)=>currentPoints.every((point,i)=>point!==startPoint[i]))
  
  middleRoutes.forEach(()=>middleRoutes.forEach(currentRouts=>currentRouts[0] === trace[trace.length-1] && trace.push(currentRouts[1])))
  
 return trace.join(', ')
}
