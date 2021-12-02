var documenterSearchIndex = {"docs":
[{"location":"theory/#Instantaneous-Spectral-Analysis-Theory-1","page":"ISA Theory","title":"Instantaneous Spectral Analysis Theory","text":"","category":"section"},{"location":"theory/#Canonical-Triplets-and-AM–FM-Components-1","page":"ISA Theory","title":"Canonical Triplets and AM–FM Components","text":"","category":"section"},{"location":"theory/#Component-Sets-and-AM–FM-Models-1","page":"ISA Theory","title":"Component Sets and AM–FM Models","text":"","category":"section"},{"location":"theory/#Instantaneous-Spectra-1","page":"ISA Theory","title":"Instantaneous Spectra","text":"","category":"section"},{"location":"theory/#More-Information-1","page":"ISA Theory","title":"More Information","text":"","category":"section"},{"location":"theory/#","page":"ISA Theory","title":"ISA Theory","text":"For additional mathematical details as well as information regarding 2D and 3D visualization of the IS we refer the reader to:","category":"page"},{"location":"theory/#","page":"ISA Theory","title":"ISA Theory","text":"S. Sandoval, and P L. De Leon. \"The Instantaneous Spectrum: A General Framework for Time-Frequency Analysis.\" IEEE Transactions on Signal Processing, vol. 66, pp. 5679–5693, Nov. 2018.","category":"page"},{"location":"typesMethods/#Types/Methods/Functions-1","page":"Types/Methods/Functions","title":"Types/Methods/Functions","text":"","category":"section"},{"location":"typesMethods/#Index-1","page":"Types/Methods/Functions","title":"Index","text":"","category":"section"},{"location":"typesMethods/#","page":"Types/Methods/Functions","title":"Types/Methods/Functions","text":"","category":"page"},{"location":"typesMethods/#Public-Interface-1","page":"Types/Methods/Functions","title":"Public Interface","text":"","category":"section"},{"location":"typesMethods/#","page":"Types/Methods/Functions","title":"Types/Methods/Functions","text":"Modules = [ISA]","category":"page"},{"location":"typesMethods/#ISA.AMFMcomp","page":"Types/Methods/Functions","title":"ISA.AMFMcomp","text":"ψ = AMFMcomp(C)\nψ = AMFMcomp(a, ω, φ)\nψ = AMFMcomp(a, ω)\n\nCreate a 'AMFMcomp' paramtertized by a single 'AMFMtriplet'.\n\nExamples\n\njulia>\n\n<EXAMPLE HERE>\n\n\n\n\n\n\n","category":"type"},{"location":"typesMethods/#ISA.AMFMmodel","page":"Types/Methods/Functions","title":"ISA.AMFMmodel","text":"z = AMFMmodel(S)\nz = AMFMmodel([ψ₁,ψ₂,…,ψₖ])\n\nCreate a 'AMFMmodel' paramtertized by a 'compSet'.\n\nExamples\n\njulia>\n\n<EXAMPLE HERE>\n\n\n\n\n\n\n","category":"type"},{"location":"typesMethods/#ISA.AMFMtriplet","page":"Types/Methods/Functions","title":"ISA.AMFMtriplet","text":"C = AMFMtriplet(a, ω, φ)\nC = AMFMtriplet(a, ω)\n\nCreate a component triplet 'AMFMtriplet' consisting of an instantenouse amplitude function a, an instantaneous frequency function ω, and a phase reference φ.\n\nCalled with two inputs a, ω, this is equivalent to AMFMtriplet(a, ω, 0.0).\n\nExamples\n\nusing ISA\na₀(t) = exp(-t^2);\nω₀(t) = 2.0;\nφ₀ = 0.0;\n𝐶₀ = AMFMtriplet(a₀,ω₀,φ₀)\n\n\n\n\n\n","category":"type"},{"location":"typesMethods/#ISA.compSet","page":"Types/Methods/Functions","title":"ISA.compSet","text":"S = compSet([C₁,C₂,…,Cₖ])\nS = compSet([ψ₁,ψ₂,…,ψₖ])\n\nCreate a component set 'compSet' paramtertized by set of canonical triplets stored in a vector of 'AMFMtriplet'.\n\nExamples\n\njulia>\n\n<EXAMPLE HERE>\n\n\n\n\n\n\n","category":"type"},{"location":"typesMethods/#ISA.demodComp","page":"Types/Methods/Functions","title":"ISA.demodComp","text":"𝚿 = demodComp(Ψ, t, fs, a, ω, s, σ, θ)\n\nCreate a 'demodComp'.\n\nExamples\n\njulia>\n\n<EXAMPLE HERE>\n\n\n\n\n\n\n","category":"type"},{"location":"typesMethods/#ISA.numComp","page":"Types/Methods/Functions","title":"ISA.numComp","text":"Ψ = numComp(Ψ, t, fs)\nΨ = numComp(Ψ, t)\nΨ = numComp(Ψ, fs)\nΨ = numComp(Ψ)\n\nCreate a 'numComp' consisting of a complex-valed signal Ψ, and time index t, and sampling frequency fs.\n\nExamples\n\njulia>\n\n<EXAMPLE HERE>\n\n\n\n\n\n\n","category":"type"},{"location":"typesMethods/#ISA.AMFMdemod-Tuple{numComp}","page":"Types/Methods/Functions","title":"ISA.AMFMdemod","text":"𝚿 = AMFMdemod(Ψ)\n\nCreate a demodComp' from a 'numComp'.\n\nExamples\n\njulia>\n\n<EXAMPLE HERE>\n\n\n\n\n\n\n","category":"method"},{"location":"typesMethods/#ISA.derivApprox-Tuple{Vector{Float64}}","page":"Types/Methods/Functions","title":"ISA.derivApprox","text":"f′ = derivApprox(f; fs, method)\n\nNumerically approximate the derivative of a sampled signal.\n\nCalled with a single input 'f', is equivalent to derivApprox(f, fs=1.0, method=\"center11\").\n\nExamples\n\njulia>\n\n<EXAMPLE HERE>\n\n\n\n\n\n\n","category":"method"},{"location":"typesMethods/#ISA.fourierSeries","page":"Types/Methods/Functions","title":"ISA.fourierSeries","text":"S = fourierSeries(T, aₖ, kInds)\n\nCreate a 'AMFMmodel' by specifiying components drawn from a Fourier Series   where 'T' is the fundemental period, 'aₖ' is a function specifying the Fourier   series coefficients, and 'kInds' is a vector containing values of k to   consider in the partial sum.\n\nExamples\n\njulia>\n\n<EXAMPLE HERE>\n\n\n\n\n\n\n","category":"function"},{"location":"basics/models/#AM–FM-Models-1","page":"AM–FM Models","title":"AM–FM Models","text":"","category":"section"},{"location":"basics/models/#","page":"AM–FM Models","title":"AM–FM Models","text":"A component set  maps to an AM–FM model AMFMmodel.","category":"page"},{"location":"basics/models/#","page":"AM–FM Models","title":"AM–FM Models","text":"zleft( t  mathscrS vphantom0^0right)  triangleq sumlimits_k=0^K-1psi_kleft( t  mathscrC_k vphantom0^0right)mathscrStriangleqleftmathscrC_0mathscrC_1cdotsmathscrC_K-1vphantom0^0right","category":"page"},{"location":"basics/models/#","page":"AM–FM Models","title":"AM–FM Models","text":"This mapping is provided in the ISA module.","category":"page"},{"location":"basics/models/#Defining-an-AM–FM-Model-1","page":"AM–FM Models","title":"Defining an AM–FM Model","text":"","category":"section"},{"location":"basics/models/#","page":"AM–FM Models","title":"AM–FM Models","text":"We define an AM–FM model primarily by passing an object, 𝑆 to the function AMFMmodel(). First, define a component set, 𝑆 by passing a vector of type AMFMtriplet to the function compSet.","category":"page"},{"location":"basics/models/#","page":"AM–FM Models","title":"AM–FM Models","text":"using ISA\n𝐶₀ = AMFMtriplet(t->exp(-t^2),t->2.0,0.0)\n𝐶₁ = AMFMtriplet(t->1.0,t->10*t,0.1)\n𝐶₂ = AMFMtriplet(t->0.8*cos(2t),t->10 + 7.5*sin(t),π)\n𝑆 = compSet([𝐶₀,𝐶₁,𝐶₂])\nz = AMFMmodel(𝑆)","category":"page"},{"location":"basics/models/#","page":"AM–FM Models","title":"AM–FM Models","text":"We also allow an AM–FM model AMFMmodel to be defined by passing an vector of AMFMcomp to the function AMFMmodel().","category":"page"},{"location":"basics/models/#","page":"AM–FM Models","title":"AM–FM Models","text":"using ISA\nψ₀ = AMFMcomp(t->exp(-t^2),t->2.0,0.0)\nψ₁ = AMFMcomp(t->1.0,t->10*t,0.1)\nψ₂ = AMFMcomp(t->0.8*cos(2t),t->10 + 7.5*sin(t),π)\nz = AMFMmodel([ψ₀,ψ₁,ψ₂])","category":"page"},{"location":"basics/models/#Evaluating-an-AM–FM-Model-1","page":"AM–FM Models","title":"Evaluating an AM–FM Model","text":"","category":"section"},{"location":"basics/models/#","page":"AM–FM Models","title":"AM–FM Models","text":"Once an  AM–FM model AMFMmodel is defined, it can be evaluated at a time instant Float64.","category":"page"},{"location":"basics/models/#","page":"AM–FM Models","title":"AM–FM Models","text":"using ISA\n𝐶₀ = AMFMtriplet(t->exp(-t^2),t->2.0,0.0)\n𝐶₁ = AMFMtriplet(t->1.0,t->10*t,0.1)\n𝐶₂ = AMFMtriplet(t->0.8*cos(2t),t->10 + 7.5*sin(t),π)\n𝑆 = compSet([𝐶₀,𝐶₁,𝐶₂])\nz = AMFMmodel(𝑆)\nt₀ = 2.0\nz(t₀)","category":"page"},{"location":"basics/models/#","page":"AM–FM Models","title":"AM–FM Models","text":"or over a step range of time instants.","category":"page"},{"location":"basics/models/#","page":"AM–FM Models","title":"AM–FM Models","text":"using ISA\n𝐶₀ = AMFMtriplet(t->exp(-t^2),t->2.0,0.0)\n𝐶₁ = AMFMtriplet(t->1.0,t->10*t,0.1)\n𝐶₂ = AMFMtriplet(t->0.8*cos(2t),t->10 + 7.5*sin(t),π)\n𝑆 = compSet([𝐶₀,𝐶₁,𝐶₂])\nz = AMFMmodel(𝑆)\nt = 0.0:0.25:1.0\nz(t)","category":"page"},{"location":"basics/models/#","page":"AM–FM Models","title":"AM–FM Models","text":"Another example of evaluating an AM–FM model over a range of time instants using the Plots module follows.","category":"page"},{"location":"basics/models/#","page":"AM–FM Models","title":"AM–FM Models","text":"using Plots\nt = 0.0:0.005:2.0\np1 = plot(t, real(z(t)), xlab=\"t\", ylab=\"real\", legend = :false)\np2 = plot(t, imag(z(t)), xlab=\"t\", ylab=\"imag\", legend = :false)\nplot(p1, p2, layout = (2,1))","category":"page"},{"location":"basics/models/#","page":"AM–FM Models","title":"AM–FM Models","text":"(Image: )","category":"page"},{"location":"basics/triplets/#Cannonical-Triplets-and-Component-Sets-1","page":"Cannonical Triplets and Component Sets","title":"Cannonical Triplets and Component Sets","text":"","category":"section"},{"location":"basics/triplets/#Cannonical-Triplets-1","page":"Cannonical Triplets and Component Sets","title":"Cannonical Triplets","text":"","category":"section"},{"location":"basics/triplets/#","page":"Cannonical Triplets and Component Sets","title":"Cannonical Triplets and Component Sets","text":"A cannonical triplet consists of an instantaneous amplitude (IA) Function, an instantaneous frequency (IF) Function, and a phase reference Real.","category":"page"},{"location":"basics/triplets/#","page":"Cannonical Triplets and Component Sets","title":"Cannonical Triplets and Component Sets","text":"mathscrCtriangleqlefta(t)omega(t) phivphantom0^0right","category":"page"},{"location":"basics/triplets/#Defining-a-Cannonical-Triplet-1","page":"Cannonical Triplets and Component Sets","title":"Defining a Cannonical Triplet","text":"","category":"section"},{"location":"basics/triplets/#","page":"Cannonical Triplets and Component Sets","title":"Cannonical Triplets and Component Sets","text":"We define an cannonical triplet  by passing the function AMFMtriplet() an instantaneous amplitude a(t) which is a real valued function of time, an instantaneous frequency omega(t) a real valued function of time , and a phase reference phi which is a real number as its input arguments. The function AMFMtriplet() will return the required cannonical triplet, 𝐶 as an object of type AMFMtriplet as follows","category":"page"},{"location":"basics/triplets/#","page":"Cannonical Triplets and Component Sets","title":"Cannonical Triplets and Component Sets","text":"using ISA\na₀(t) = exp(-t^2)\nω₀(t) = 2.0\nφ₀ = 0.0\n𝐶₀ = AMFMtriplet(a₀,ω₀,φ₀)","category":"page"},{"location":"basics/triplets/#Component-Sets-1","page":"Cannonical Triplets and Component Sets","title":"Component Sets","text":"","category":"section"},{"location":"basics/triplets/#","page":"Cannonical Triplets and Component Sets","title":"Cannonical Triplets and Component Sets","text":"A component set is a set of cannonical triplet of type Vector{AMFMtriplet}.","category":"page"},{"location":"basics/triplets/#","page":"Cannonical Triplets and Component Sets","title":"Cannonical Triplets and Component Sets","text":"mathscrStriangleqleftmathscrC_0mathscrC_1cdotsmathscrC_K-1vphantom0^0right","category":"page"},{"location":"basics/triplets/#Defining-a-Component-Set-1","page":"Cannonical Triplets and Component Sets","title":"Defining a Component Set","text":"","category":"section"},{"location":"basics/triplets/#","page":"Cannonical Triplets and Component Sets","title":"Cannonical Triplets and Component Sets","text":"We define a component set primarily by defining a structure or a constructor method which contains the object 𝑆 that creates a vector of cannonical triplets.","category":"page"},{"location":"basics/triplets/#","page":"Cannonical Triplets and Component Sets","title":"Cannonical Triplets and Component Sets","text":" using ISA\n 𝐶₀ = AMFMtriplet(t->exp(-t^2),t->2.0,0.0)\n 𝐶₁ = AMFMtriplet(t->1.0,t->10*t,0.1)\n 𝐶₂ = AMFMtriplet(t->0.8*cos(2t),t->10 + 7.5*sin(t),π)\n 𝑆 = compSet([𝐶₀,𝐶₁,𝐶₂])","category":"page"},{"location":"cite/#Cite-1","page":"Cite","title":"Cite","text":"","category":"section"},{"location":"cite/#","page":"Cite","title":"Cite","text":"If you use this software in you research, please cite the following work.","category":"page"},{"location":"cite/#","page":"Cite","title":"Cite","text":"S. Sandoval, and P L. De Leon. \"The Instantaneous Spectrum: A General Framework for Time-Frequency Analysis.\" IEEE Transactions on Signal Processing, vol. 66, pp. 5679–5693, Nov. 2018.","category":"page"},{"location":"cite/#","page":"Cite","title":"Cite","text":"@article{Sandoval2018ISA,\n           title = {The Instantaneous Spectrum: A General Framework for\n                    Time-Frequency Analysis},\n           author = {S.~Sandoval and P.~L.~{De~Leon}},\n           journal = {{IEEE Trans.~Signal Process.}},\n           volume = {66},\n           year = {2018},\n           month = {Nov},\n           pages = {5679-5693}\n}","category":"page"},{"location":"cite/#","page":"Cite","title":"Cite","text":"S. Sandoval, H. Alshammari, and M. Dalal, \"ISA.jl: Instantaneous Spectral Analysis in Julia\", in preparation.","category":"page"},{"location":"cite/#","page":"Cite","title":"Cite","text":"@article{Sandoval2022ISA,\n           title = {ISA.jl: Instantaneous Spectral Analysis in Julia},\n           author = {S.~Sandoval, H.~Alshammari, and M.~Dalal},\n           notes = {in preparation}\n}","category":"page"},{"location":"basics/components/#AM–FM-Components-1","page":"AM–FM Components","title":"AM–FM Components","text":"","category":"section"},{"location":"basics/components/#","page":"AM–FM Components","title":"AM–FM Components","text":"A component triplet  maps to an AM–FM component AMFMcomp.","category":"page"},{"location":"basics/components/#","page":"AM–FM Components","title":"AM–FM Components","text":"psi_k left( t  mathscrC_k vphantom0^0right) triangleq a_k(t) expleft(mathrmj leftint_-infty^t omega_k(tau)mathrmdtau +phi_kright right)","category":"page"},{"location":"basics/components/#","page":"AM–FM Components","title":"AM–FM Components","text":"This mapping is provided in the ISA module.","category":"page"},{"location":"basics/components/#Defining-an-AM–FM-Component-1","page":"AM–FM Components","title":"Defining an AM–FM Component","text":"","category":"section"},{"location":"basics/components/#","page":"AM–FM Components","title":"AM–FM Components","text":"We define an AM–FM component by passing the function AMFMcomp() an object of type AMFMtriplet. First we create an object say, C of type AMFMtriplet by providing an instantaneous amplitude a(t), an instantaneous frequency omega(t), and a phase reference phi to function AMFMtriplet. Then we simply pass the object C to the function AMFMcomp() that will result into required AM–FM component as follows","category":"page"},{"location":"basics/components/#","page":"AM–FM Components","title":"AM–FM Components","text":" using ISA\n a₀(t) = exp(-t^2);\n ω₀(t) = 2.0;\n φ₀ = 0.0;\n 𝐶₀ = AMFMtriplet(a₀,ω₀,φ₀);\n ψ₀ = AMFMcomp(𝐶₀)","category":"page"},{"location":"basics/components/#","page":"AM–FM Components","title":"AM–FM Components","text":"We also allow an AM–FM component AMFMcomp to be defined by passing the function AMFMcomp() an instantaneous amplitude (IA) Function, an instantaneous frequency (IF) Function, and a phase reference Real as follows:","category":"page"},{"location":"basics/components/#","page":"AM–FM Components","title":"AM–FM Components","text":" using ISA\n a₀(t) = exp(-t^2)\n ω₀(t) = 2.0\n φ₀ = 1.0\n ψ₀ = AMFMcomp(a₀,ω₀,φ₀)","category":"page"},{"location":"basics/components/#Evaluating-an-AM–FM-Component-1","page":"AM–FM Components","title":"Evaluating an AM–FM Component","text":"","category":"section"},{"location":"basics/components/#","page":"AM–FM Components","title":"AM–FM Components","text":"Once an  AM–FM component AMFMcomp is defined it can be evaluated at a time instant Float64.","category":"page"},{"location":"basics/components/#","page":"AM–FM Components","title":"AM–FM Components","text":" using ISA\n 𝐶₀ = AMFMtriplet(t->exp(-t^2), t->2.0, 0.0)\n ψ₀ = AMFMcomp(𝐶₀)\n t₀ = 0.15\n ψ₀(t₀)","category":"page"},{"location":"basics/components/#","page":"AM–FM Components","title":"AM–FM Components","text":"or over a step range of time instants.","category":"page"},{"location":"basics/components/#","page":"AM–FM Components","title":"AM–FM Components","text":" using ISA\n 𝐶₀ = AMFMtriplet(t->exp(-t^2), t->2.0, 0.0)\n ψ₀ = AMFMcomp(𝐶₀)\n t = 0.0:0.25:1.0\n ψ₀(t)","category":"page"},{"location":"basics/components/#","page":"AM–FM Components","title":"AM–FM Components","text":"Another example of evaluating an AM–FM component over a range of time instants using the Plots module follows.","category":"page"},{"location":"basics/components/#","page":"AM–FM Components","title":"AM–FM Components","text":"using ISA, Plots\nt = 0.0:0.005:2.0\np1 = plot(t, real(ψ₀(t)), xlab=\"t\", ylab=\"real\", legend = :false)\np2 = plot(t, imag(ψ₀(t)), xlab=\"t\", ylab=\"imag\", legend = :false)\nplot(p1, p2, layout = (2,1))","category":"page"},{"location":"basics/components/#","page":"AM–FM Components","title":"AM–FM Components","text":"(Image: )","category":"page"},{"location":"#[ISA.jl:-Instantaneous-Spectral-Analysis-in-Julia](https://github.com/NMSU-ISA/ISA/)-1","page":"Home","title":"ISA.jl: Instantaneous Spectral Analysis in Julia","text":"","category":"section"},{"location":"#Installation-1","page":"Home","title":"Installation","text":"","category":"section"},{"location":"#Users-1","page":"Home","title":"Users","text":"","category":"section"},{"location":"#","page":"Home","title":"Home","text":"Download Julia v1.6.4 or later, if you haven't already.\nAdd the ISA module entering the following at the REPL ]add https://github.com/NMSU-ISA/ISA.","category":"page"},{"location":"#Student-Developers-1","page":"Home","title":"Student Developers","text":"","category":"section"},{"location":"#","page":"Home","title":"Home","text":"Clone the ISA module to username/.julia/dev/.\nEnter the package manager in REPL by pressing ]  then add the package by typing dev ISA rather than add ISA.","category":"page"},{"location":"#Table-of-Contents-1","page":"Home","title":"Table of Contents","text":"","category":"section"},{"location":"#","page":"Home","title":"Home","text":"Pages = [\"theory.md\",\n         \"basics/triplets.md\",\n         \"basics/components.md\",\n         \"basics/models.md\",\n         \"basics/spectra.md\",\n         \"numerical/componentsNumerical.md\",\n         \"typesMethods.md\",\n         \"cite.md\",\n         ]","category":"page"},{"location":"basics/spectra/#Instantaneous-Spectra-1","page":"Instantaneous Spectra","title":"Instantaneous Spectra","text":"","category":"section"},{"location":"basics/spectra/#","page":"Instantaneous Spectra","title":"Instantaneous Spectra","text":"A component set compSet maps to an instantaneous spectrum (IS).","category":"page"},{"location":"basics/spectra/#","page":"Instantaneous Spectra","title":"Instantaneous Spectra","text":"The two-dimensional (2-D) IS in the time-frequency coordinates for a signal expressed with set of canonical triplets  mathscrS=mathscrC_0mathscrC_1cdotsmathscrC_K-1 is given by","category":"page"},{"location":"basics/spectra/#","page":"Instantaneous Spectra","title":"Instantaneous Spectra","text":"mathcalS(tomegamathscrS)  =  2 pi sumlimits_k=0^K-1 psi_kleft( t  mathscrC_k vphantom0^0right)deltaleft(vphantom0^0omega-omega_k(t)vphantom0^0right)","category":"page"},{"location":"basics/spectra/#","page":"Instantaneous Spectra","title":"Instantaneous Spectra","text":"and  three-dimensional (3-D) IS in the time-frequency-real coordinates is given by","category":"page"},{"location":"basics/spectra/#","page":"Instantaneous Spectra","title":"Instantaneous Spectra","text":"mathcalS(tomegasmathscrS) = 2 pi sumlimits_k=0^K-1 psi_kleft( t  mathscrC_k vphantom0^0right) ^2deltaleft(omega-omega_k(t)s-s_k(t)vphantom0^0right)","category":"page"},{"location":"basics/spectra/#","page":"Instantaneous Spectra","title":"Instantaneous Spectra","text":"Visualization for ISs are provided in the ISA module.","category":"page"},{"location":"basics/spectra/#Visualizing-an-Instantaneous-Spectrum-1","page":"Instantaneous Spectra","title":"Visualizing an Instantaneous Spectrum","text":"","category":"section"},{"location":"basics/spectra/#","page":"Instantaneous Spectra","title":"Instantaneous Spectra","text":"We can visualize a 3-D IS as follows. First, define a component set. Then, ...","category":"page"},{"location":"basics/spectra/#","page":"Instantaneous Spectra","title":"Instantaneous Spectra","text":"using ISA, Plots\n𝐶₀ = AMFMtriplet(t->exp(-t^2),t->2.0,0.0)\n𝐶₁ = AMFMtriplet(t->1.0,t->10*t,0.1)\n𝐶₂ = AMFMtriplet(t->0.8*cos(2t),t->10 + 7.5*sin(t),π)\n𝑆 = compSet([𝐶₀,𝐶₁,𝐶₂])\n\nplot(z) # default timeaxis\nplot(z, timeaxis=0.0:0.005:3.0) # custom timeaxis\n\nplot(𝑆)\nplot(𝑆,timeaxis=0.0:0.005:3.0)\n\nplot(ψ₀,timeaxis=0.0:0.005:2.0)\nplot!(ψ₁,timeaxis=0.0:0.005:2.0)\nplot!(ψ₂,timeaxis=0.0:0.005:2.0)\n\nplot(𝐶₀,timeaxis=0.0:0.005:5.0)\nplot!(𝐶₁,timeaxis=0.0:0.005:5.0)\nplot!(𝐶₂,timeaxis=0.0:0.005:5.0)","category":"page"},{"location":"numerical/componentsNumerical/#Numerical-AM–FM-Components-1","page":"Numerical Components","title":"Numerical AM–FM Components","text":"","category":"section"},{"location":"numerical/componentsNumerical/#","page":"Numerical Components","title":"Numerical Components","text":"A Numerical AM–FM component numComp...","category":"page"},{"location":"numerical/componentsNumerical/#","page":"Numerical Components","title":"Numerical Components","text":"using ISA\n𝐶₀ = AMFMtriplet(t->exp(-t^2), t->2.0, 0.0)\nψ₀ = AMFMcomp(𝐶₀)\nfs = 16_000\nΨ = numComp( ψ₀(0:1/fs :1),fs )","category":"page"},{"location":"numerical/componentsNumerical/#","page":"Numerical Components","title":"Numerical Components","text":"A Numerical AM–FM component numComp can be demodulated using the function AMFMdemod().","category":"page"},{"location":"numerical/componentsNumerical/#","page":"Numerical Components","title":"Numerical Components","text":"using ISA\n𝐶₀ = AMFMtriplet(t->exp(-t^2), t->2.0, 0.0)\nψ₀ = AMFMcomp(𝐶₀)\nfs = 16_000\nΨ = numComp( ψ₀(0:1/fs :1),fs )\n𝚿 = AMFMdemod(Ψ)","category":"page"}]
}
