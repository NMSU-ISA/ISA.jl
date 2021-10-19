var documenterSearchIndex = {"docs":
[{"location":"distributions/STFT/#Short-time-Fourier-Transform-(STFT)-1","page":"Distributions","title":"Short-time Fourier Transform (STFT)","text":"","category":"section"},{"location":"distributions/STFT/#Example-1","page":"Distributions","title":"Example","text":"","category":"section"},{"location":"distributions/STFT/#","page":"Distributions","title":"Distributions","text":"using ISA\r\nusing Plots\r\n\r\nfs=500\r\nt = collect(0.0:1/fs:2.0)\r\na₀(t) = exp(-t^2)\r\nω₀(t) = 50\r\nφ₀ = 0\r\n𝐶₀ = Tuple([a₀,ω₀,φ₀])\r\na₁(t) = exp(-(t-1.0)^2)\r\nω₁(t) = 2*π*100 + 150*sin(2t)\r\nφ₁ = π\r\n𝐶₁ = Tuple([a₁,ω₁,φ₁])\r\na₂(t) = 0.8*cos(2t)\r\nω₂(t) = 2*π*(-100 + 50t)\r\nφ₂ = π\r\n𝐶₂ = Tuple([a₂,ω₂,φ₂])\r\n𝑆 = [𝐶₀,𝐶₁,𝐶₂]\r\nz = AMFMmodel(𝑆)\r\n\r\np1 = isaPlot3d(z, t, FreqUnits=\"Hz\")\r\n\r\nwindowFunction = ones(Float64,25)\r\nframeAdvance = 1\r\nZ,freqs = STFT(z(t), windowFunction, frameAdvance,fs=fs)\r\n\r\np2 = contour(t[1:frameAdvance:end], freqs, abs.(reduce(hcat,Z)), fill=:true, seriescolor=cgrad(ISA.cmap),levels=5 )\r\n\r\nplot(p1,p2,layout=(2,1))","category":"page"},{"location":"basics/componentsNumerical/#Numerical-AM–FM-Components-1","page":"Numerical Components","title":"Numerical AM–FM Components","text":"","category":"section"},{"location":"basics/componentsNumerical/#","page":"Numerical Components","title":"Numerical Components","text":"A Numerical AM–FM component AMFMcompN is a complex vector Vector{ComplexF64} which has be demodulated using the function AMFMdemod().","category":"page"},{"location":"basics/componentsNumerical/#","page":"Numerical Components","title":"Numerical Components","text":"using ISA\nusing Plots\n\na₀(t) = exp(-t^2)\nω₀(t) = 25\nφ₀ = 0\n𝐶₀ = Tuple([a₀,ω₀,φ₀])\nψ₀ = AMFMcomp(𝐶₀)\na₁(t) = exp(-0.5t^2)\nω₁(t) = 10 + 3*sin(t)\nφ₁ = 0\n𝐶₁ = Tuple([a₁,ω₁,φ₁])\nψ₁ = AMFMcomp(𝐶₁)\n\nt = -1.0:0.01:1.0\n\np1 = isaPlot3d(ψ₀,t)\np2 = isaPlot3d(AMFMmodel([ψ₀,ψ₁]),t)\n\n#COMPONENT OBSERVATION\nΨ₀ = ψ₀(t)\nΨ₁ = ψ₁(t)\n\n#ESTIMATE NUMERICAL COMPONENT\n𝚿₀ = AMFMdemod(Ψ₀,t)\n𝚿₁ = AMFMdemod(Ψ₁,t)\n\np3 = isaPlot3d(𝚿₀)\np4 = isaPlot3d([𝚿₀,𝚿₁])\nplot(p1,p2,p3,p4)","category":"page"},{"location":"basics/models/#AM–FM-Models-1","page":"AM–FM Models","title":"AM–FM Models","text":"","category":"section"},{"location":"basics/models/#","page":"AM–FM Models","title":"AM–FM Models","text":"A component set  maps to an AM–FM model AMFMmodel.","category":"page"},{"location":"basics/models/#","page":"AM–FM Models","title":"AM–FM Models","text":"zleft( t  mathscrS vphantom0^0right)  triangleq sumlimits_k=0^K-1psi_kleft( t  mathscrC_k vphantom0^0right)mathscrStriangleqleftmathscrC_0mathscrC_1cdotsmathscrC_K-1vphantom0^0right","category":"page"},{"location":"basics/models/#","page":"AM–FM Models","title":"AM–FM Models","text":"This mapping is provided in the ISA module.","category":"page"},{"location":"basics/models/#","page":"AM–FM Models","title":"AM–FM Models","text":"using ISA","category":"page"},{"location":"basics/models/#Defining-an-AM–FM-Model-1","page":"AM–FM Models","title":"Defining an AM–FM Model","text":"","category":"section"},{"location":"basics/models/#","page":"AM–FM Models","title":"AM–FM Models","text":"We can define an AM–FM model by passing an object, 𝑆 to the function AMFMmodel() .First, define a component set, 𝑆 by passing an object of type AMFMtriplet to the function compSet.","category":"page"},{"location":"basics/models/#","page":"AM–FM Models","title":"AM–FM Models","text":"\na₀(t) = exp(-t^2)\nω₀(t) = 2.0\nφ₀ = 0.0\n𝐶₀ = AMFMtriplet(a₀,ω₀,φ₀)\n\na₁(t) = 1.0\nω₁(t) = 10*t\nφ₁ = 0.1\n𝐶₁ = AMFMtriplet(a₁,ω₁,φ₁)\n\n𝑆 = compSet([𝐶₀,𝐶₁])\nz = AMFMmodel(𝑆)","category":"page"},{"location":"basics/models/#","page":"AM–FM Models","title":"AM–FM Models","text":"We also allow an AM–FM model AMFMmodel to be defined by passing an array of AMFMcomp to the function AMFMmodel(). First, define the components.","category":"page"},{"location":"basics/models/#","page":"AM–FM Models","title":"AM–FM Models","text":"a₀(t) = exp(-t^2)\nω₀(t) = 2.0\nφ₀ = 0.0\nψ₀ = AMFMcomp(a₀,ω₀,φ₀)\n\na₁(t) = 1.0\nω₁(t) = 10*t\nφ₁ = 0.1\nψ₁ = AMFMcomp(a₁,ω₁,φ₁)\n\na₂(t) = 0.8*cos(2t)\nω₂(t) = 10 + 7.5*sin(t)\nφ₂ = π\nψ₂ = AMFMcomp(a₂,ω₂,φ₂)","category":"page"},{"location":"basics/models/#","page":"AM–FM Models","title":"AM–FM Models","text":"Then pass the array of AMFMcomp to the function AMFMmodel().","category":"page"},{"location":"basics/models/#","page":"AM–FM Models","title":"AM–FM Models","text":"z = AMFMmodel([ψ₀,ψ₁,ψ₂])","category":"page"},{"location":"basics/models/#Evaluating-an-AM–FM-Model-1","page":"AM–FM Models","title":"Evaluating an AM–FM Model","text":"","category":"section"},{"location":"basics/models/#","page":"AM–FM Models","title":"AM–FM Models","text":"Once an  AM–FM model AMFMmodel is defined it can be evaluated at a time instant Float64","category":"page"},{"location":"basics/models/#","page":"AM–FM Models","title":"AM–FM Models","text":"julia> t₀ = 0.15\njulia> z(t₀)\n1.9115881433508801 + 0.4998495708278627im","category":"page"},{"location":"basics/models/#","page":"AM–FM Models","title":"AM–FM Models","text":"or over a range of time instants Array{Float64,1}.","category":"page"},{"location":"basics/models/#","page":"AM–FM Models","title":"AM–FM Models","text":"julia> t = 0.0:0.25:1.0\njulia> z(t)\n5-element Vector{ComplexF64}:\n  1.9950041652780257 + 0.09983341664682815im\n   1.740533956870742 + 0.8512794956108032im\n  0.6397945459984344 + 1.631061619726915im\n -0.9335680061860003 + 0.7954494882259775im\n 0.22488587703875393 - 0.5913028530884702im","category":"page"},{"location":"basics/models/#","page":"AM–FM Models","title":"AM–FM Models","text":"Another example of evaluating an AM–FM model over a range of time instants using the Plots module follows.","category":"page"},{"location":"basics/models/#","page":"AM–FM Models","title":"AM–FM Models","text":"using Plots\nt = 0.0:0.005:2.0\np1 = plot(t, real(z(t)), xlab=\"t\", ylab=\"real\", legend = :false)\np2 = plot(t, imag(z(t)), xlab=\"t\", ylab=\"imag\", legend = :false)\nplot(p1, p2, layout = (2,1))","category":"page"},{"location":"basics/models/#","page":"AM–FM Models","title":"AM–FM Models","text":"(Image: )","category":"page"},{"location":"basics/triplets/#Cannonical-Triplets-and-Component-Sets-1","page":"Cannonical Triplets and Component Sets","title":"Cannonical Triplets and Component Sets","text":"","category":"section"},{"location":"basics/triplets/#Cannonical-Triplets-1","page":"Cannonical Triplets and Component Sets","title":"Cannonical Triplets","text":"","category":"section"},{"location":"basics/triplets/#","page":"Cannonical Triplets and Component Sets","title":"Cannonical Triplets and Component Sets","text":"A cannonical triplet consists of an instantaneous amplitude (IA) Function, an instantaneous frequency (IF) Function, and a phase reference Real.","category":"page"},{"location":"basics/triplets/#","page":"Cannonical Triplets and Component Sets","title":"Cannonical Triplets and Component Sets","text":"mathscrCtriangleqleftaomega phivphantom0^0right","category":"page"},{"location":"basics/triplets/#Defining-a-Cannonical-Triplet-1","page":"Cannonical Triplets and Component Sets","title":"Defining a Cannonical Triplet","text":"","category":"section"},{"location":"basics/triplets/#","page":"Cannonical Triplets and Component Sets","title":"Cannonical Triplets and Component Sets","text":"We define an cannonical triplet  by passing the function AMFMtriplet() an instantaneous amplitude a(t) i.e a real valued function of time, an instantaneous frequency omega(t) a real valued function of time  , and a phase reference phi which is a real number as its input arguments. The function AMFMtriplet() will return us the required cannonical triplet, 𝐶 as an object of type AMFMtriplet in the following way:","category":"page"},{"location":"basics/triplets/#","page":"Cannonical Triplets and Component Sets","title":"Cannonical Triplets and Component Sets","text":"using ISA\n\na₀(t) = exp(-t^2)\n\nω₀(t) = 2.0\n\nφ₀ = 0.0\n\n𝐶₀ = AMFMtriplet(a₀,ω₀,φ₀)","category":"page"},{"location":"basics/triplets/#Component-Sets-1","page":"Cannonical Triplets and Component Sets","title":"Component Sets","text":"","category":"section"},{"location":"basics/triplets/#","page":"Cannonical Triplets and Component Sets","title":"Cannonical Triplets and Component Sets","text":"A component set is a set of cannonical triplet of type Vector{AMFMtriplet}.","category":"page"},{"location":"basics/triplets/#","page":"Cannonical Triplets and Component Sets","title":"Cannonical Triplets and Component Sets","text":"mathscrStriangleqleftmathscrC_0mathscrC_1cdotsmathscrC_K-1vphantom0^0right","category":"page"},{"location":"basics/triplets/#Defining-a-Component-Set-1","page":"Cannonical Triplets and Component Sets","title":"Defining a Component Set","text":"","category":"section"},{"location":"basics/triplets/#","page":"Cannonical Triplets and Component Sets","title":"Cannonical Triplets and Component Sets","text":"We can define a component set by defining a structure or a constructor method which contains the object 𝑆 that creates a vector of cannonical triplets as follows:","category":"page"},{"location":"basics/triplets/#","page":"Cannonical Triplets and Component Sets","title":"Cannonical Triplets and Component Sets","text":"a₀(t) = exp(-t^2)\nω₀(t) = 2.0\nφ₀ = 0.0\n𝐶₀ = AMFMtriplet(a₀,ω₀,φ₀)\n\na₁(t) = 1.0\nω₁(t) = 10*t\nφ₁ = 0.1\n𝐶₁ = AMFMtriplet(a₁,ω₁,φ₁)\n\na₂(t) = 0.8*cos(2t)\nω₂(t) = 10 + 7.5*sin(t)\nφ₂ = π\n𝐶₂ = AMFMtriplet(a₂,ω₂,φ₂)\n\n𝑆 = compSet([𝐶₀,𝐶₁,𝐶₂])","category":"page"},{"location":"cite/#Citation-1","page":"Citation","title":"Citation","text":"","category":"section"},{"location":"cite/#","page":"Citation","title":"Citation","text":"If you use this module in your research, please cite the following work.","category":"page"},{"location":"cite/#","page":"Citation","title":"Citation","text":"Sandoval, Steven, and Phillip L. De Leon. \"The Instantaneous Spectrum: A General Framework for Time-Frequency Analysis.\" IEEE Transactions on Signal Processing 66.21 (2018): 5679-5693.","category":"page"},{"location":"cite/#","page":"Citation","title":"Citation","text":"@article{Sandoval2018ISA,\n           title = {The Instantaneous Spectrum: A General Framework for\n                    Time-Frequency Analysis},\n           author = {S.~Sandoval and P.~L.~{De~Leon}},\n           journal = {{IEEE Trans.~Sig.~Process.}},\n           volume = {66},\n           year = {2018},\n           month = {Nov},\n           pages = {5679-5693}\n}","category":"page"},{"location":"basics/components/#AM–FM-Components-1","page":"AM–FM Components","title":"AM–FM Components","text":"","category":"section"},{"location":"basics/components/#","page":"AM–FM Components","title":"AM–FM Components","text":"A component triplet  maps to an AM–FM component AMFMcomp.","category":"page"},{"location":"basics/components/#","page":"AM–FM Components","title":"AM–FM Components","text":"psi_k left( t  mathscrC_k vphantom0^0right) triangleq a_k(t) expleft(mathrmj leftint_-infty^t omega_k(tau)mathrmdtau +phi_kright right)","category":"page"},{"location":"basics/components/#","page":"AM–FM Components","title":"AM–FM Components","text":"This mapping is provided in the ISA module.","category":"page"},{"location":"basics/components/#","page":"AM–FM Components","title":"AM–FM Components","text":"using ISA","category":"page"},{"location":"basics/components/#Defining-an-AM–FM-Component-1","page":"AM–FM Components","title":"Defining an AM–FM Component","text":"","category":"section"},{"location":"basics/components/#","page":"AM–FM Components","title":"AM–FM Components","text":"We define an AM–FM component by passing the function AMFMcomp() a object of type AMFMtriplet. First we will create an object say, C of type AMFMtriplet by providing an instantaneous amplitude a(t), an instantaneous frequency omega(t), and a phase reference phi to function AMFMtriplet. Then we simply pass the object C to the function AMFMcomp() that will result into required AM–FM component.","category":"page"},{"location":"basics/components/#","page":"AM–FM Components","title":"AM–FM Components","text":"\na₀(t) = exp(-t^2)\nω₀(t) = 2.0\nφ₀ = 0.0\n𝐶₀ = AMFMtriplet(a₀,ω₀,φ₀)\n\nψ₀ = AMFMcomp(𝐶₀)","category":"page"},{"location":"basics/components/#","page":"AM–FM Components","title":"AM–FM Components","text":"We also allow an AM–FM component AMFMcomp to be defined by passing the function AMFMcomp() an instantaneous amplitude (IA) Function, an instantaneous frequency (IF) Function, and a phase reference Real. [*need to update after modifying function baiscComps]","category":"page"},{"location":"basics/components/#Evaluating-an-AM–FM-Component-1","page":"AM–FM Components","title":"Evaluating an AM–FM Component","text":"","category":"section"},{"location":"basics/components/#","page":"AM–FM Components","title":"AM–FM Components","text":"Once an  AM–FM component AMFMcomp is defined it can be evaluated at a time instant Float64","category":"page"},{"location":"basics/components/#","page":"AM–FM Components","title":"AM–FM Components","text":"\nt₀ = 0.15\nψ₀(t₀)\nprintln(\"AMFM Components at an time instant: \", ψ(t₀))\n","category":"page"},{"location":"basics/components/#","page":"AM–FM Components","title":"AM–FM Components","text":"or over a range of time instants Array{Float64,1}.","category":"page"},{"location":"basics/components/#","page":"AM–FM Components","title":"AM–FM Components","text":"\nt = 0.0:0.25:1.0\nψ₀(t)\nprintln(\"AMFM Components over a range of time instants: \", ψ₀(t))","category":"page"},{"location":"basics/components/#","page":"AM–FM Components","title":"AM–FM Components","text":"Another example of evaluating an AM–FM component over a range of time instants using the Plots module follows.","category":"page"},{"location":"basics/components/#","page":"AM–FM Components","title":"AM–FM Components","text":"using Plots\nt = 0.0:0.005:2.0\np1 = plot(t, real(ψ₀(t)), xlab=\"t\", ylab=\"real\", legend = :false)\np2 = plot(t, imag(ψ₀(t)), xlab=\"t\", ylab=\"imag\", legend = :false)\nplot(p1, p2, layout = (2,1))","category":"page"},{"location":"basics/components/#","page":"AM–FM Components","title":"AM–FM Components","text":"(Image: )","category":"page"},{"location":"basics/plotlyBackend/#PlotlyBackend.jl-1","page":"PlotlyBackend.jl","title":"PlotlyBackend.jl","text":"","category":"section"},{"location":"basics/plotlyBackend/#","page":"PlotlyBackend.jl","title":"PlotlyBackend.jl","text":"Graphs of the ISA model are shown using the Plotly framework in combination with Dash. In order to use PlotlyBackend.jl the user must add the required packages into your Julia Package Manager. To open the Julia Package Manager by type: ] in the Julia Terminal. Then add the required packages:","category":"page"},{"location":"basics/plotlyBackend/#","page":"PlotlyBackend.jl","title":"PlotlyBackend.jl","text":"julia> ]\npkg> add https://github.com/plotly/Plotly.jl\npkg> add https://github.com/plotly/Dash.jl.git\npkg> add JSON\npkg> add WAV","category":"page"},{"location":"basics/plotlyBackend/#Contents-1","page":"PlotlyBackend.jl","title":"Contents","text":"","category":"section"},{"location":"basics/plotlyBackend/#","page":"PlotlyBackend.jl","title":"PlotlyBackend.jl","text":"Public Functions\nShutting Down Server\nDictionary Representation\nData Representation\nTutorials & Help\nCode Base Architecture","category":"page"},{"location":"basics/plotlyBackend/#a-name\"PublicFunctions\"/Public-Functions-1","page":"PlotlyBackend.jl","title":"<a name=\"PublicFunctions\"/>Public Functions","text":"","category":"section"},{"location":"basics/plotlyBackend/#","page":"PlotlyBackend.jl","title":"PlotlyBackend.jl","text":"runPlotlyBackend() and runPlotlyBackend(dict) are the only two functions that should be accessed outside of the file. runPlotlyBackend() will run a Dash server with default data while runPlotlyBackend(dict) will run with specific data.","category":"page"},{"location":"basics/plotlyBackend/#a-name\"ShuttingDownServer\"/Shutting-Down-Server-1","page":"PlotlyBackend.jl","title":"<a name=\"ShuttingDownServer\"/>Shutting Down Server","text":"","category":"section"},{"location":"basics/plotlyBackend/#","page":"PlotlyBackend.jl","title":"PlotlyBackend.jl","text":"When runPlotlyBackend() or runPlotlyBackend(dict) is called, a Dash Server will run. To stop the dash server, hold CONTROL + C in the terminal.","category":"page"},{"location":"basics/plotlyBackend/#a-name\"DictionaryRepresentation\"/Dictionary-Representation-1","page":"PlotlyBackend.jl","title":"<a name=\"DictionaryRepresentation\"/>Dictionary Representation","text":"","category":"section"},{"location":"basics/plotlyBackend/#","page":"PlotlyBackend.jl","title":"PlotlyBackend.jl","text":"A dictionary will be used to contain all the information plotlyBackend.jl will need. The dictionary will contain two keys: components and freqUnits. An example of two 3D lines is shown below:","category":"page"},{"location":"basics/plotlyBackend/#","page":"PlotlyBackend.jl","title":"PlotlyBackend.jl","text":"{\n  \"freqUnits\": \"rad/s\",\n  \"components\": [\n    {\n      \"colorMap\": [\n        \"rgb(255,255,0)\",\n        \"rgb(0,255,0)\",\n        \"rgb(255,255,0)\"\n      ],\n      \"x\": [\n        1,\n        2,\n        3\n      ],\n      \"z\": [\n        7,\n        8,\n        9\n      ],\n      \"y\": [\n        4,\n        5,\n        6\n      ]\n    },\n    {\n      \"colorMap\": [\n        \"rgb(255,0,0)\",\n        \"rgb(0,0,255)\",\n        \"rgb(255,0,0)\"\n      ],\n      \"x\": [\n        1,\n        2,\n        3\n      ],\n      \"z\": [\n        70,\n        80,\n        90\n      ],\n      \"y\": [\n        40,\n        50,\n        60\n      ]\n    }\n  ]\n}","category":"page"},{"location":"basics/plotlyBackend/#Components-Key-1","page":"PlotlyBackend.jl","title":"Components Key","text":"","category":"section"},{"location":"basics/plotlyBackend/#","page":"PlotlyBackend.jl","title":"PlotlyBackend.jl","text":"The components key holds an array of dictionaries. The minimum length must be 1. Each component dictionary has four keys: x, y, z, and colorMap. Each of these keys holds an array of values representing the points of a 3D line. While the x, y, and z arrays contain float or integer values; the colorMap array holds string values. The string is formatted like: \"rgb(255,0,0)\" representing the RGB color. Please make sure the array lengths of the x, y, z, and colorMap are equal. Additionally, if you have multiple components, ensure the x arrays are equal throughout the entire data set.","category":"page"},{"location":"basics/plotlyBackend/#FreqUnits-Key-1","page":"PlotlyBackend.jl","title":"FreqUnits Key","text":"","category":"section"},{"location":"basics/plotlyBackend/#","page":"PlotlyBackend.jl","title":"PlotlyBackend.jl","text":"The freqUnits key holds a string value. This key is optional and is not required since it is defaulted to: \"rad/s\". NOTE: the sole purpose of this key is to display the frequency units label on the y-axis. It does NOT perform any transformations to the data. Please perform these calculations before calling any functions in plotlyBackend.jl.","category":"page"},{"location":"basics/plotlyBackend/#a-name\"DataRepresentation\"/Data-Representation-1","page":"PlotlyBackend.jl","title":"<a name=\"DataRepresentation\"/>Data Representation","text":"","category":"section"},{"location":"basics/plotlyBackend/#","page":"PlotlyBackend.jl","title":"PlotlyBackend.jl","text":"The graphed data will be represented with an array of dictionaries. Each dictionary represents a line in the 3D graph as shown below. Please note, there is one surface object in the data set. The Z-MIN projection is appended as the last 3D graph object in the data array (which is indeed a surface object).","category":"page"},{"location":"basics/plotlyBackend/#","page":"PlotlyBackend.jl","title":"PlotlyBackend.jl","text":"myLine = Dict(\n    \"line\" => Dict(\n        \"color\" => \"rgb(255,0,0)\",\n        \"width\" => lineWidth\n    ),\n    \"mode\" => \"lines\",\n    \"type\" => \"scatter3d\",\n    \"opacity\" => 1.0,\n    \"x\" => x,\n    \"y\" => y,\n    \"z\" => z,\n    \"visible\" => plotlyBackend_determineChecklistStatus()[\"FFT\"],\n    \"showlegend\" => true\n)\ndata = [myLine] # A data array with one line component","category":"page"},{"location":"basics/plotlyBackend/#Plotly-Graph-Objects-1","page":"PlotlyBackend.jl","title":"Plotly Graph Objects","text":"","category":"section"},{"location":"basics/plotlyBackend/#","page":"PlotlyBackend.jl","title":"PlotlyBackend.jl","text":"Please refer to Plotly Documentation in Javascript for figure references. As of May 2020, Plotly does not have figure references in Julia. Nonetheless, all Plotly figures can be represented as Julia dictionaries or tuples.","category":"page"},{"location":"basics/plotlyBackend/#Appended-Projections-1","page":"PlotlyBackend.jl","title":"Appended Projections","text":"","category":"section"},{"location":"basics/plotlyBackend/#","page":"PlotlyBackend.jl","title":"PlotlyBackend.jl","text":"PlotlyBackend.jl will automatically make 3 new line components in addition to the original data set. Hence, the least amount of components in a data set is 4 (1 original & 3 new lines). The projection on the X-MIN axis will be in the third last position of the array. The projection on the Y-MIN axis will be in the second last position of the array. The projection on the Z-MIN axis will be in the last position of the array. Please be careful when looping through the data set. Make sure to do the following if you want to exclude the projection data:","category":"page"},{"location":"basics/plotlyBackend/#","page":"PlotlyBackend.jl","title":"PlotlyBackend.jl","text":"for component in plotlyBackend_data[1:end-3]\n  # do stuff\nend","category":"page"},{"location":"basics/plotlyBackend/#a-name\"TutorialsAndHelp\"/Tutorials-and-Help-1","page":"PlotlyBackend.jl","title":"<a name=\"TutorialsAndHelp\"/>Tutorials & Help","text":"","category":"section"},{"location":"basics/plotlyBackend/#","page":"PlotlyBackend.jl","title":"PlotlyBackend.jl","text":"If you are unfamiliar with Plotly or Dash, I would purchase this Udemy course: Plotly and Dash Tutorials. Please note that the Udemy course is in Python. However, it is relatively similar to Julia. See Plotly Documentation in Javascript for Plolty figure references and Dash in Julia to see how Python Dash is wrapped into Julia code.","category":"page"},{"location":"basics/plotlyBackend/#a-name\"CodeBaseArchitecture\"/Code-Base-Architecture-1","page":"PlotlyBackend.jl","title":"<a name=\"CodeBaseArchitecture\"/>Code Base Architecture","text":"","category":"section"},{"location":"basics/plotlyBackend/#","page":"PlotlyBackend.jl","title":"PlotlyBackend.jl","text":"Here are the contents for this section:","category":"page"},{"location":"basics/plotlyBackend/#","page":"PlotlyBackend.jl","title":"PlotlyBackend.jl","text":"Discussion\nPackages\nGlobal Outlets\nGlobal Variables\nGlobal Constants\nPublic Functions\nDash Server\nInteraction Functions\nUpdate Functions\nAssign Globals Functions\nDetermine Functions\nDash HTML","category":"page"},{"location":"basics/plotlyBackend/#a-name\"codeDiscussion\"/Discussion-1","page":"PlotlyBackend.jl","title":"<a name=\"codeDiscussion\"/>Discussion","text":"","category":"section"},{"location":"basics/plotlyBackend/#","page":"PlotlyBackend.jl","title":"PlotlyBackend.jl","text":"There were many challenges and architectural choices that had to be made for this backend. First, the use of Dash.jl. Dash is an extension of Plotly enabling design of the user interface in HTML. The developer also has the power to write custom functions when certain UI components are interacted with. This choice was made because Dash is very mature and allowed for the most customization.","category":"page"},{"location":"basics/plotlyBackend/#","page":"PlotlyBackend.jl","title":"PlotlyBackend.jl","text":"Second, are adaptions to the Julia programming language. Julia has its strengths and weaknesses. But one weakness is Julia's modularization. Everytime the developer wants to split up code in different files, he/she would need to export it as a module. There are no classes in Julia, and the creators of Julia basically encourage developers to use the include approach while reserving the use of modules unless really needed. The include approach is the same as copying and pasting a whole file and drastically reduces compile time. Hence, it was decided to keep the entire backend in one file. Since it is such common practice to use include in Julia, the backend will add the prefix plotlyBackend_ to all variables and functions that should not be called from another file. This also eliminates all possible name collisions that may occur.","category":"page"},{"location":"basics/plotlyBackend/#","page":"PlotlyBackend.jl","title":"PlotlyBackend.jl","text":"Third, the use of global variables. In general, global variables are bad practice However, this choice was made to quicken development speed and improve code efficiency. For example, the plotly backend frequently must know what the X-min of a dataset is (and the data set may contain over a million points). The backend could have recalculated it every time or passed it in as a function parameter multiple times throughout the lifecycle of the application; but it was decided to keep it easy and keep it has a global variable. Also note that Julia's global variables are not necessarily shared throughout the whole application. It is relatively hidden.","category":"page"},{"location":"basics/plotlyBackend/#","page":"PlotlyBackend.jl","title":"PlotlyBackend.jl","text":"Finally, the execution of backend goes something like this: 1) Read a dictionary and assign all global variables accordingly. 2) Create an HTML file based on global variables. 3) Add interaction functions so the UI can change the global variables. 4) Update the UI to match the global variables.","category":"page"},{"location":"basics/plotlyBackend/#a-name\"codePackages\"/Packages-1","page":"PlotlyBackend.jl","title":"<a name=\"codePackages\"/>Packages","text":"","category":"section"},{"location":"basics/plotlyBackend/#","page":"PlotlyBackend.jl","title":"PlotlyBackend.jl","text":"This is the first part of the backend. We declare packages we need here. A Julia user then must add the packages to their Julia Package Manager before running the program.","category":"page"},{"location":"basics/plotlyBackend/#a-name\"codeGlobalOutlets\"/Global-Outlets-1","page":"PlotlyBackend.jl","title":"<a name=\"codeGlobalOutlets\"/>Global Outlets","text":"","category":"section"},{"location":"basics/plotlyBackend/#","page":"PlotlyBackend.jl","title":"PlotlyBackend.jl","text":"These are global variables that hold the value of the UI components on the screen. It is important to update these outlets to the newest value whenever a user changes the UI. Based on the values stored in the global outlets within the graph layout, data, etc. may change.","category":"page"},{"location":"basics/plotlyBackend/#a-name\"codeGlobalConstants\"/Global-Constants-1","page":"PlotlyBackend.jl","title":"<a name=\"codeGlobalConstants\"/>Global Constants","text":"","category":"section"},{"location":"basics/plotlyBackend/#","page":"PlotlyBackend.jl","title":"PlotlyBackend.jl","text":"The constants declared in the file.","category":"page"},{"location":"basics/plotlyBackend/#a-name\"codePublicFunctions\"/Public-Functions-1","page":"PlotlyBackend.jl","title":"<a name=\"codePublicFunctions\"/>Public Functions","text":"","category":"section"},{"location":"basics/plotlyBackend/#","page":"PlotlyBackend.jl","title":"PlotlyBackend.jl","text":"See Public Functions","category":"page"},{"location":"basics/plotlyBackend/#a-name\"codeDashServer\"/Dash-Server-1","page":"PlotlyBackend.jl","title":"<a name=\"codeDashServer\"/>Dash Server","text":"","category":"section"},{"location":"basics/plotlyBackend/#","page":"PlotlyBackend.jl","title":"PlotlyBackend.jl","text":"The Dash server sets up the UI and assigns each UI component to a callback. A callback is triggered when a UI component is changed. The plotly backend uses this to map the trigger to a corresponding interaction function.","category":"page"},{"location":"basics/plotlyBackend/#a-name\"codeInteractionFunctions\"/Interaction-Functions-1","page":"PlotlyBackend.jl","title":"<a name=\"codeInteractionFunctions\"/>Interaction Functions","text":"","category":"section"},{"location":"basics/plotlyBackend/#","page":"PlotlyBackend.jl","title":"PlotlyBackend.jl","text":"The interaction functions are called using Dash's callbacks. The function name usually corresponds to the name of the UI component attached with \"interacted\". For example: plotlyBackend_buttonInteracted(). The primary goal of the interaction function is to 1) write the new value to the global outlet and 2) update the global variables so the Dash callback can return the correct object to modify on the screen.","category":"page"},{"location":"basics/plotlyBackend/#a-name\"codeUpdateFunctions\"/Update-Functions-1","page":"PlotlyBackend.jl","title":"<a name=\"codeUpdateFunctions\"/>Update Functions","text":"","category":"section"},{"location":"basics/plotlyBackend/#","page":"PlotlyBackend.jl","title":"PlotlyBackend.jl","text":"The update functions changes a global variable slightly. It does not rewrite over anything and is usually pretty minimal. These functions are primarily called from interaction functions in order to complete their second goal of updating a global variable. Make sure the global variables are set before using.","category":"page"},{"location":"basics/plotlyBackend/#a-name\"codeAssignGlobalsFunctions\"/Assign-Functions-1","page":"PlotlyBackend.jl","title":"<a name=\"codeAssignGlobalsFunctions\"/>Assign Functions","text":"","category":"section"},{"location":"basics/plotlyBackend/#","page":"PlotlyBackend.jl","title":"PlotlyBackend.jl","text":"Assigning all the global variables is the first step to run the backend. Update and determine functions depending on global variables being set. These functions completely rewrite over any global variables and should be used very very seldomly. Functions with global variable dependencies are marked with the prefix force. Make sure that the global variable dependencies are set before using these functions.","category":"page"},{"location":"basics/plotlyBackend/#a-name\"codeDetermineFunctions\"/Determine-Functions-1","page":"PlotlyBackend.jl","title":"<a name=\"codeDetermineFunctions\"/>Determine Functions","text":"","category":"section"},{"location":"basics/plotlyBackend/#","page":"PlotlyBackend.jl","title":"PlotlyBackend.jl","text":"Determine functions usually calcuates or returns a value based on the current values of the global variables. It will not alter any global variables but it requires the global variables to be set.","category":"page"},{"location":"basics/plotlyBackend/#a-name\"codeDashHTML\"/Dash-HTML-1","page":"PlotlyBackend.jl","title":"<a name=\"codeDashHTML\"/>Dash HTML","text":"","category":"section"},{"location":"basics/plotlyBackend/#","page":"PlotlyBackend.jl","title":"PlotlyBackend.jl","text":"This portion of the code is the HTML code that displays on the local host. This is actually not written in HTML but is wrapped by Python which is wrapped again by Julia.","category":"page"},{"location":"decomposition/EMD/#EMD-Based-Methods-1","page":"Decomposition","title":"EMD-Based Methods","text":"","category":"section"},{"location":"decomposition/EMD/#The-(Real)-Sifting-Algorithm-1","page":"Decomposition","title":"The (Real) Sifting Algorithm","text":"","category":"section"},{"location":"decomposition/EMD/#","page":"Decomposition","title":"Decomposition","text":"using ISA\r\nusing Plots\r\nsig = cos.(0.0:π/100:10pi) +  cos.( 5*(0.0:π/100:10pi))+  cos.( 20*(0.0:π/100:10pi))\r\nφ₁ = SIFT(sig)\r\nplot(sig)\r\nplot!(φ₁)\r\nφ₂ = SIFT(sig-φ₁)\r\nplot!(φ₂)\r\nplot!(sig-φ₁-φ₂)","category":"page"},{"location":"decomposition/EMD/#The-(Real)-EMD-Algorithm-1","page":"Decomposition","title":"The (Real) EMD Algorithm","text":"","category":"section"},{"location":"decomposition/EMD/#","page":"Decomposition","title":"Decomposition","text":"using ISA\r\nusing Plots\r\nsig = cos.(0.0:π/100:10pi) +  cos.( 5*(0.0:π/100:10pi))+  cos.( 20*(0.0:π/100:10pi))\r\nIMF = EMD(sig)\r\nplot(sig)\r\nplot!(IMF)","category":"page"},{"location":"decomposition/EMD/#The-Complex-Sifting-Algorithm-1","page":"Decomposition","title":"The Complex Sifting Algorithm","text":"","category":"section"},{"location":"decomposition/EMD/#","page":"Decomposition","title":"Decomposition","text":"using ISA\r\nusing Plots\r\nsig = exp.( 1im*(0.0:π/100:10pi)) +  exp.( 5im*(0.0:π/100:10pi)) +  exp.( 20im*(0.0:π/100:10pi))\r\nφ₁ = ℂSIFT(sig)\r\nplot(real(sig))\r\nplot!(real(φ₁))\r\nφ₂ = ℂSIFT(sig-φ₁)\r\nplot!(real(φ₂))\r\nplot!(real(sig-φ₁-φ₂))","category":"page"},{"location":"decomposition/EMD/#The-Complex-EMD-Algorithm-1","page":"Decomposition","title":"The Complex EMD Algorithm","text":"","category":"section"},{"location":"decomposition/EMD/#","page":"Decomposition","title":"Decomposition","text":"using ISA\r\nusing Plots\r\nsig = exp.( 1im*(0.0:π/100:10pi)) +  exp.( 5im*(0.0:π/100:10pi)) +  exp.( 20im*(0.0:π/100:10pi))\r\nIMF = ℂEMD(sig)\r\nplot(real(sig))\r\nplot!(real.(IMF))","category":"page"},{"location":"#","page":"Home","title":"Home","text":"","category":"page"},{"location":"#","page":"Home","title":"Home","text":"Modules = [ISA]","category":"page"},{"location":"#ISA.jl:-The-Julia-Library-for-Instantaneous-Spectral-Analysis-1","page":"Home","title":"ISA.jl: The Julia Library for Instantaneous Spectral Analysis","text":"","category":"section"},{"location":"#","page":"Home","title":"Home","text":"(Image: )","category":"page"},{"location":"#","page":"Home","title":"Home","text":"In January of 2020, we began to re-implement our ISA tools in the Julia programing language. This module is still in development–-Please be patient as we continue to add new features.","category":"page"},{"location":"#Installation-1","page":"Home","title":"Installation","text":"","category":"section"},{"location":"#Users-1","page":"Home","title":"Users","text":"","category":"section"},{"location":"#","page":"Home","title":"Home","text":"Download Julia 1.6 or later, if you haven't already.\nAdd the ISA module entering the following at the REPL ]add https://github.com/NMSU-ISA/ISA.jl.","category":"page"},{"location":"#Student-Developers-1","page":"Home","title":"Student Developers","text":"","category":"section"},{"location":"#","page":"Home","title":"Home","text":"Download/Clone the ISA module to username/.julia/dev/.\nEnter the package manager in REPL by pressing ]  then add the package by typing dev ISA rather than add ISA.","category":"page"},{"location":"#testing-1","page":"Home","title":"testing","text":"","category":"section"},{"location":"#","page":"Home","title":"Home","text":"1","category":"page"},{"location":"#","page":"Home","title":"Home","text":"a = 1\nb = 2\na + b","category":"page"},{"location":"#","page":"Home","title":"Home","text":"2","category":"page"},{"location":"#","page":"Home","title":"Home","text":"a = 1","category":"page"},{"location":"#","page":"Home","title":"Home","text":"3","category":"page"},{"location":"#","page":"Home","title":"Home","text":"a = 1\nb = 2\na + b","category":"page"},{"location":"basics/spectra/#Instantaneous-Spectra-1","page":"Instantaneous Spectra","title":"Instantaneous Spectra","text":"","category":"section"},{"location":"basics/spectra/#","page":"Instantaneous Spectra","title":"Instantaneous Spectra","text":"A component set Array{Tuple{Function,Function,Real},1} maps to an instantaneous spectrum (IS).","category":"page"},{"location":"basics/spectra/#","page":"Instantaneous Spectra","title":"Instantaneous Spectra","text":"The two-dimensional (2-D) IS in the time-frequency coordinates for a signal expressed with set of canonical triplets  mathscrS=mathscrC_0mathscrC_1cdotsmathscrC_K-1 is given by","category":"page"},{"location":"basics/spectra/#","page":"Instantaneous Spectra","title":"Instantaneous Spectra","text":"mathcalS(tomegamathscrS)  =  2 pi sumlimits_k=0^K-1 psi_kleft( t  mathscrC_k vphantom0^0right)deltaleft(vphantom0^0omega-omega_k(t)vphantom0^0right)","category":"page"},{"location":"basics/spectra/#","page":"Instantaneous Spectra","title":"Instantaneous Spectra","text":"and  three-dimensional (3-D) IS in the time-frequency-real coordinates is given by","category":"page"},{"location":"basics/spectra/#","page":"Instantaneous Spectra","title":"Instantaneous Spectra","text":"mathcalS(tomegasmathscrS) = 2 pi sumlimits_k=0^K-1 psi_kleft( t  mathscrC_k vphantom0^0right) ^2deltaleft(omega-omega_k(t)s-s_k(t)vphantom0^0right)","category":"page"},{"location":"basics/spectra/#","page":"Instantaneous Spectra","title":"Instantaneous Spectra","text":"Visualization for ISs are provided in the ISA module.","category":"page"},{"location":"basics/spectra/#","page":"Instantaneous Spectra","title":"Instantaneous Spectra","text":"using ISA","category":"page"},{"location":"basics/spectra/#Visualizing-an-Instantaneous-Spectrum-1","page":"Instantaneous Spectra","title":"Visualizing an Instantaneous Spectrum","text":"","category":"section"},{"location":"basics/spectra/#","page":"Instantaneous Spectra","title":"Instantaneous Spectra","text":"We can visualize a 3-D IS as follows. First, define a component set.","category":"page"},{"location":"basics/spectra/#","page":"Instantaneous Spectra","title":"Instantaneous Spectra","text":"a₀(t) = exp(-t^2)\nω₀(t) = 2.0\nφ₀ = 0.0\n𝐶₀ = (a₀,ω₀,φ₀)\n\na₁(t) = 1.0\nω₁(t) = 10*t\nφ₁ = 0.1\n𝐶₁ = (a₁,ω₁,φ₁)\n\na₂(t) = 0.8*cos(2t)\nω₂(t) = 10 + 7.5*sin(t)\nφ₂ = π\n𝐶₂ = (a₂,ω₂,φ₂)\n\n𝑆 = [𝐶₀,𝐶₁,𝐶₂]","category":"page"},{"location":"basics/spectra/#","page":"Instantaneous Spectra","title":"Instantaneous Spectra","text":"Then, pass the component set Array{Tuple{Function,Function,Real},1} and a time index Array{Float64,1} to the function isaPlot3d().","category":"page"},{"location":"basics/spectra/#","page":"Instantaneous Spectra","title":"Instantaneous Spectra","text":"t = 0.0:0.005:2.0\nisaPlot3d(𝑆, t)","category":"page"},{"location":"basics/spectra/#","page":"Instantaneous Spectra","title":"Instantaneous Spectra","text":"(Image: )","category":"page"},{"location":"basics/spectra/#","page":"Instantaneous Spectra","title":"Instantaneous Spectra","text":"NOTE: isaPlot3d() is still under development.","category":"page"},{"location":"basics/spectra/#","page":"Instantaneous Spectra","title":"Instantaneous Spectra","text":"~!~ MORE/BETTER VISUALIZATION TOOLS ARE CURRENTLY IN DEVELOPMENT ~!~","category":"page"}]
}
