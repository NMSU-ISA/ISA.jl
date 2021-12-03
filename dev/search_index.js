var documenterSearchIndex = {"docs":
[{"location":"typesMethods/#Types/Methods/Functions-1","page":"Types/Methods/Functions","title":"Types/Methods/Functions","text":"","category":"section"},{"location":"typesMethods/#Index-1","page":"Types/Methods/Functions","title":"Index","text":"","category":"section"},{"location":"typesMethods/#","page":"Types/Methods/Functions","title":"Types/Methods/Functions","text":"","category":"page"},{"location":"typesMethods/#Public-Interface-1","page":"Types/Methods/Functions","title":"Public Interface","text":"","category":"section"},{"location":"typesMethods/#","page":"Types/Methods/Functions","title":"Types/Methods/Functions","text":"Modules = [ISA]","category":"page"},{"location":"typesMethods/#ISA.AMFMcomp","page":"Types/Methods/Functions","title":"ISA.AMFMcomp","text":"ψ = AMFMcomp(C)\nψ = AMFMcomp(a, ω, φ)\nψ = AMFMcomp(a, ω)\n\nCreate a 'AMFMcomp' paramtertized by a single 'AMFMtriplet'.\n\nExamples\n\n using ISA\n 𝐶₀ = AMFMtriplet(t->exp(-t^2),t->2.0,0.0)\n ψ₀ = AMFMcomp(𝐶₀)\n\n\n\n\n\n","category":"type"},{"location":"typesMethods/#ISA.AMFMmodel","page":"Types/Methods/Functions","title":"ISA.AMFMmodel","text":"z = AMFMmodel(S)\nz = AMFMmodel([ψ₁,ψ₂,…,ψₖ])\n\nCreate a 'AMFMmodel' paramtertized by a 'compSet'.\n\nExamples\n\nusing ISA\n𝐶₀ = AMFMtriplet(t->exp(-t^2),t->2.0,0.0)\n𝐶₁ = AMFMtriplet(t->1.0,t->10*t,0.1)\n𝐶₂ = AMFMtriplet(t->0.8*cos(2t),t->10 + 7.5*sin(t),π)\n𝑆 = compSet([𝐶₀,𝐶₁,𝐶₂])\nz = AMFMmodel(𝑆)\nt = 0.0:0.25:1.0\nz(t)\n\n\n\n\n\n","category":"type"},{"location":"typesMethods/#ISA.AMFMtriplet","page":"Types/Methods/Functions","title":"ISA.AMFMtriplet","text":"C = AMFMtriplet(a, ω, φ)\nC = AMFMtriplet(a, ω)\n\nCreate a component triplet 'AMFMtriplet' consisting of an instantenouse amplitude function a, an instantaneous frequency function ω, and a phase reference φ.\n\nCalled with two inputs a, ω, this is equivalent to AMFMtriplet(a, ω, 0.0).\n\nExamples\n\nusing ISA\na₀(t) = exp(-t^2);\nω₀(t) = 2.0;\nφ₀ = 0.0;\n𝐶₀ = AMFMtriplet(a₀,ω₀,φ₀)\n\n\n\n\n\n","category":"type"},{"location":"typesMethods/#ISA.compSet","page":"Types/Methods/Functions","title":"ISA.compSet","text":"S = compSet([C₁,C₂,…,Cₖ])\nS = compSet([ψ₁,ψ₂,…,ψₖ])\n\nCreate a component set 'compSet' paramtertized by vector of numerical AM–FM components.\n\nExamples\n\n using ISA\n 𝐶₀ = AMFMtriplet(t->exp(-t^2),t->2.0,0.0)\n 𝐶₁ = AMFMtriplet(t->1.0,t->10*t,0.1)\n 𝐶₂ = AMFMtriplet(t->0.8*cos(2t),t->10 + 7.5*sin(t),π)\n 𝑆 = compSet([𝐶₀,𝐶₁,𝐶₂])\n\n\n\n\n\n","category":"type"},{"location":"typesMethods/#ISA.demodComp","page":"Types/Methods/Functions","title":"ISA.demodComp","text":"𝚿 = demodComp(Ξ, t, fs, a, ω, s, σ, θ)\n\nCreate a 'demodComp'.\n\nExamples\n\nusing ISA\n𝐶₀ = AMFMtriplet(t->exp(-t^2), t->2.0, 0.0)\nψ₀ = AMFMcomp(𝐶₀)\nfs = 16_000\nΞ = numComp( ψ₀(0:1/fs :1),fs )\n𝚿 = AMFMdemod(Ξ)\n\n\n\n\n\n","category":"type"},{"location":"typesMethods/#ISA.demodModel","page":"Types/Methods/Functions","title":"ISA.demodModel","text":"𝚿 = demodMode(Ξ)\n\nCreate a demodulated AM-FM Model 'demodModel' ...\n\nExamples\n\nusing ISA\nψ₀ = AMFMcomp(t->exp(-t^2),t->2.0,0.0)\nψ₁ = AMFMcomp(t->1.0,t->10*t,0.1)\nψ₂ = AMFMcomp(t->0.8*cos(2t),t->10 + 7.5*sin(t),π)\nfs = 16_000\nt = collect(0:1/fs:1)\n𝛹₀ = numComp( ψ₀(t), fs )\n𝛹₁ = numComp( ψ₁(t), fs )\n𝛹₂ = numComp( ψ₂(t), fs )\nΞ = numModel([𝛹₀,𝛹₁,𝛹₂],t,fs)\n𝚿 = AMFMdemod(Ξ,t,fs)\n\n\n\n\n\n","category":"type"},{"location":"typesMethods/#ISA.numComp","page":"Types/Methods/Functions","title":"ISA.numComp","text":"Ξ = numComp(Ψ, t, fs)\nΞ = numComp(Ψ, t)\nΞ = numComp(Ψ, fs)\nΞ = numComp(Ψ)\n\nCreate a 'numComp' consisting of a complex-valed signal Ψ, and time index t, and sampling frequency fs.\n\nExamples\n\nusing ISA\n𝐶₀ = AMFMtriplet(t->exp(-t^2), t->2.0, 0.0)\nψ₀ = AMFMcomp(𝐶₀)\nfs = 16_000\nΞ = numComp( ψ₀(0:1/fs :1),fs )\n\n\n\n\n\n","category":"type"},{"location":"typesMethods/#ISA.numModel","page":"Types/Methods/Functions","title":"ISA.numModel","text":"Ξ = numModel([𝛹₀,𝛹₁,𝛹₂],t,fs)\n\nCreate a numerical AM-FM Model 'numModel' paramtertized by set of canonical triplets stored in a vector of 'AMFMtriplet'.\n\nExamples\n\nusing ISA\nψ₀ = AMFMcomp(t->exp(-t^2),t->2.0,0.0)\nψ₁ = AMFMcomp(t->1.0,t->10*t,0.1)\nψ₂ = AMFMcomp(t->0.8*cos(2t),t->10 + 7.5*sin(t),π)\nfs = 16_000\nt = collect{0:1/fs:1}\n𝛹₀ = numComp( ψ₀(t), fs )\n𝛹₁ = numComp( ψ₁(t), fs )\n𝛹₂ = numComp( ψ₂(t), fs )\nΞ = numModel([𝛹₀,𝛹₁,𝛹₂],t,fs)\n\n\n\n\n\n","category":"type"},{"location":"typesMethods/#ISA.AMFMdemod-Tuple{numComp}","page":"Types/Methods/Functions","title":"ISA.AMFMdemod","text":"𝚿 = AMFMdemod(Ψ)\n\nCreate a demodComp' from a 'numComp'.\n\nExamples\n\njulia>\n\n<EXAMPLE HERE>\n\n\n\n\n\n\n","category":"method"},{"location":"typesMethods/#ISA.derivApprox-Tuple{Vector{Float64}}","page":"Types/Methods/Functions","title":"ISA.derivApprox","text":"f′ = derivApprox(f; fs, method)\n\nNumerically approximate the derivative of a sampled signal.\n\nCalled with a single input 'f', is equivalent to derivApprox(f, fs=1.0, method=\"center11\").\n\nExamples\n\njulia>\n\n<EXAMPLE HERE>\n\n\n\n\n\n\n","category":"method"},{"location":"typesMethods/#ISA.fourierSeries","page":"Types/Methods/Functions","title":"ISA.fourierSeries","text":"S = fourierSeries(T, aₖ, kInds)\n\nCreate a 'AMFMmodel' by specifiying components drawn from a Fourier Series   where 'T' is the fundemental period, 'aₖ' is a function specifying the Fourier   series coefficients, and 'kInds' is a vector containing values of k to   consider in the partial sum.\n\nExamples\n\nusing ISA, Plots\nT = 1.0\naₖ(k) = 1.0\nkInds = collect(-25:25)\nz = fourierSeries(T, aₖ, kInds)\nplot(z; timeaxis=-1.0:0.001:1.0)\n\n\n\n\n\n","category":"function"},{"location":"basics/models/#AM–FM-Models-1","page":"AM–FM Models","title":"AM–FM Models","text":"","category":"section"},{"location":"basics/models/#","page":"AM–FM Models","title":"AM–FM Models","text":"An AM–FM model z(t) (AMFMmodel) is parameterized by a component set mathscrS (compSet).","category":"page"},{"location":"basics/models/#","page":"AM–FM Models","title":"AM–FM Models","text":"zleft( t  mathscrS vphantom0^0right)  triangleq sumlimits_k=0^K-1psi_kleft( t  mathscrC_k vphantom0^0right)mathscrStriangleqleftmathscrC_0mathscrC_1cdotsmathscrC_K-1vphantom0^0right","category":"page"},{"location":"basics/models/#Defining-an-AM–FM-Model-1","page":"AM–FM Models","title":"Defining an AM–FM Model","text":"","category":"section"},{"location":"basics/models/#","page":"AM–FM Models","title":"AM–FM Models","text":"We can define an AM–FM model z(t) (AMFMmodel) by calling AMFMmodel() with a component set mathscrS (compSet).","category":"page"},{"location":"basics/models/#","page":"AM–FM Models","title":"AM–FM Models","text":"using ISA\n𝐶₀ = AMFMtriplet(t->exp(-t^2),t->2.0,0.0)\n𝐶₁ = AMFMtriplet(t->1.0,t->10*t,0.1)\n𝐶₂ = AMFMtriplet(t->0.8*cos(2t),t->10 + 7.5*sin(t),π)\n𝑆 = compSet([𝐶₀,𝐶₁,𝐶₂])\nz = AMFMmodel(𝑆)","category":"page"},{"location":"basics/models/#","page":"AM–FM Models","title":"AM–FM Models","text":"For convenience, we can also define an AM–FM model z(t) (AMFMmodel) by calling AMFMmodel() with either a vector of canonical triplets","category":"page"},{"location":"basics/models/#","page":"AM–FM Models","title":"AM–FM Models","text":"using ISA\n𝐶₀ = AMFMtriplet(t->exp(-t^2),t->2.0,0.0)\n𝐶₁ = AMFMtriplet(t->1.0,t->10*t,0.1)\n𝐶₂ = AMFMtriplet(t->0.8*cos(2t),t->10 + 7.5*sin(t),π)\nz = AMFMmodel([𝐶₀,𝐶₁,𝐶₂])","category":"page"},{"location":"basics/models/#","page":"AM–FM Models","title":"AM–FM Models","text":"or a vector of AMFM–components","category":"page"},{"location":"basics/models/#","page":"AM–FM Models","title":"AM–FM Models","text":"using ISA\nψ₀ = AMFMcomp(t->exp(-t^2),t->2.0,0.0)\nψ₁ = AMFMcomp(t->1.0,t->10*t,0.1)\nψ₂ = AMFMcomp(t->0.8*cos(2t),t->10 + 7.5*sin(t),π)\nz = AMFMmodel([ψ₀,ψ₁,ψ₂])","category":"page"},{"location":"basics/models/#Evaluating-an-AM–FM-Model-1","page":"AM–FM Models","title":"Evaluating an AM–FM Model","text":"","category":"section"},{"location":"basics/models/#","page":"AM–FM Models","title":"AM–FM Models","text":"Once an  AM–FM model z(t) AMFMmodel is defined, it can be evaluated at a time instant t_0 (Real).","category":"page"},{"location":"basics/models/#","page":"AM–FM Models","title":"AM–FM Models","text":"using ISA\n𝐶₀ = AMFMtriplet(t->exp(-t^2),t->2.0,0.0)\n𝐶₁ = AMFMtriplet(t->1.0,t->10*t,0.1)\n𝐶₂ = AMFMtriplet(t->0.8*cos(2t),t->10 + 7.5*sin(t),π)\n𝑆 = compSet([𝐶₀,𝐶₁,𝐶₂])\nz = AMFMmodel(𝑆)\nt₀ = 2.0\nz(t₀)","category":"page"},{"location":"basics/models/#","page":"AM–FM Models","title":"AM–FM Models","text":"or over a range of time instants","category":"page"},{"location":"basics/models/#","page":"AM–FM Models","title":"AM–FM Models","text":"using ISA\n𝐶₀ = AMFMtriplet(t->exp(-t^2),t->2.0,0.0)\n𝐶₁ = AMFMtriplet(t->1.0,t->10*t,0.1)\n𝐶₂ = AMFMtriplet(t->0.8*cos(2t),t->10 + 7.5*sin(t),π)\n𝑆 = compSet([𝐶₀,𝐶₁,𝐶₂])\nz = AMFMmodel(𝑆)\nt = 0.0:0.25:1.0\nz(t)","category":"page"},{"location":"basics/triplets/#Canonical-Triplets-and-Component-Sets-1","page":"Cannonical Triplets and Component Sets","title":"Canonical Triplets and Component Sets","text":"","category":"section"},{"location":"basics/triplets/#Canonical-Triplets-1","page":"Cannonical Triplets and Component Sets","title":"Canonical Triplets","text":"","category":"section"},{"location":"basics/triplets/#","page":"Cannonical Triplets and Component Sets","title":"Cannonical Triplets and Component Sets","text":"A canonical triplet mathscrC (AMFMtriplet) is parameterized by an instantaneous amplitude (IA) a(t) (Function), an instantaneous frequency (IF) omega(t) (Function), and a phase reference phi (Real).","category":"page"},{"location":"basics/triplets/#","page":"Cannonical Triplets and Component Sets","title":"Cannonical Triplets and Component Sets","text":"mathscrCtriangleqlefta(t)omega(t) phivphantom0^0right","category":"page"},{"location":"basics/triplets/#Defining-a-Canonical-Triplet-1","page":"Cannonical Triplets and Component Sets","title":"Defining a Canonical Triplet","text":"","category":"section"},{"location":"basics/triplets/#","page":"Cannonical Triplets and Component Sets","title":"Cannonical Triplets and Component Sets","text":"We can define a canonical triplet mathscrC (AMFMtriplet) by calling AMFMtriplet() with an IA a(t) (Function)  and IF omega(t) (Function) which are both real-valued functions of a (real-valued) time variable, and a phase reference phi (Real) which is a real number.","category":"page"},{"location":"basics/triplets/#","page":"Cannonical Triplets and Component Sets","title":"Cannonical Triplets and Component Sets","text":"using ISA\na(t) = exp(-t^2)\nω(t) = 2.0\nφ = 0.0\n𝐶 = AMFMtriplet(a,ω,φ)","category":"page"},{"location":"basics/triplets/#Component-Sets-1","page":"Cannonical Triplets and Component Sets","title":"Component Sets","text":"","category":"section"},{"location":"basics/triplets/#","page":"Cannonical Triplets and Component Sets","title":"Cannonical Triplets and Component Sets","text":"A component set mathscrS (compSet) is parameterized by a set of canonical triplets.","category":"page"},{"location":"basics/triplets/#","page":"Cannonical Triplets and Component Sets","title":"Cannonical Triplets and Component Sets","text":"mathscrStriangleqleftmathscrC_0mathscrC_1cdotsmathscrC_K-1vphantom0^0right","category":"page"},{"location":"basics/triplets/#Defining-a-Component-Set-1","page":"Cannonical Triplets and Component Sets","title":"Defining a Component Set","text":"","category":"section"},{"location":"basics/triplets/#","page":"Cannonical Triplets and Component Sets","title":"Cannonical Triplets and Component Sets","text":"We can define a component set mathscrS (comSet) by calling compSet() with a vector of canonical triplets.","category":"page"},{"location":"basics/triplets/#","page":"Cannonical Triplets and Component Sets","title":"Cannonical Triplets and Component Sets","text":" using ISA\n 𝐶₀ = AMFMtriplet(t->exp(-t^2),t->2.0,0.0)\n 𝐶₁ = AMFMtriplet(t->1.0,t->10*t,0.1)\n 𝐶₂ = AMFMtriplet(t->0.8*cos(2t),t->10 + 7.5*sin(t),π)\n 𝑆 = compSet([𝐶₀,𝐶₁,𝐶₂])","category":"page"},{"location":"examples/AM/#Amplitude-Modulation-(AM)-Components-1","page":"AM Components","title":"Amplitude Modulation (AM) Components","text":"","category":"section"},{"location":"examples/AM/#","page":"AM Components","title":"AM Components","text":"An amplitude modulation (AM) component has constant instantaneous frequency","category":"page"},{"location":"examples/AM/#","page":"AM Components","title":"AM Components","text":"omega_0(t)rightarrow omega_0","category":"page"},{"location":"examples/AM/#","page":"AM Components","title":"AM Components","text":"and thus corresponds to a canonical triplet with the form","category":"page"},{"location":"examples/AM/#","page":"AM Components","title":"AM Components","text":"mathscrC_0 = lefta_0(t)omega_0 phi_0vphantom0^0right","category":"page"},{"location":"numerical/models/#Numerical-AM–FM-Model-1","page":"Numerical AM–FM Models","title":"Numerical AM–FM Model","text":"","category":"section"},{"location":"numerical/models/#","page":"Numerical AM–FM Models","title":"Numerical AM–FM Models","text":"A numerical AM–FM model numModel is parameterized by a *vector of  numerical AM–FM components** numComp.","category":"page"},{"location":"numerical/models/#","page":"Numerical AM–FM Models","title":"Numerical AM–FM Models","text":"using ISA\r\nψ₀ = AMFMcomp(t->exp(-t^2),t->2.0,0.0)\r\nψ₁ = AMFMcomp(t->1.0,t->10*t,0.1)\r\nψ₂ = AMFMcomp(t->0.8*cos(2t),t->10 + 7.5*sin(t),π)\r\nfs = 16_000\r\nt = collect(0:1/fs:1)\r\n𝛹₀ = numComp( ψ₀(t), fs )\r\n𝛹₁ = numComp( ψ₁(t), fs )\r\n𝛹₂ = numComp( ψ₂(t), fs )\r\nnumModel([𝛹₀,𝛹₁,𝛹₂],t,fs)","category":"page"},{"location":"numerical/models/#","page":"Numerical AM–FM Models","title":"Numerical AM–FM Models","text":"A demodulated AM–FM model demodModel is returned by calling AMFMdemod() with a numerical AM–FM model numModel.","category":"page"},{"location":"numerical/models/#","page":"Numerical AM–FM Models","title":"Numerical AM–FM Models","text":"using ISA\r\n","category":"page"},{"location":"examples/FM/#Frequency-Modulation-(FM)-Components-1","page":"FM Components","title":"Frequency Modulation (FM) Components","text":"","category":"section"},{"location":"examples/FM/#","page":"FM Components","title":"FM Components","text":"An frequency modulation (FM) component has constant instantaneous amplitude","category":"page"},{"location":"examples/FM/#","page":"FM Components","title":"FM Components","text":"a_0(t)rightarrow a_0","category":"page"},{"location":"examples/FM/#","page":"FM Components","title":"FM Components","text":"and thus corresponds to a canonical triplet with the form","category":"page"},{"location":"examples/FM/#","page":"FM Components","title":"FM Components","text":"mathscrC_0 = lefta_0omega_0(t) phi_0vphantom0^0right","category":"page"},{"location":"examples/Fourier/#Simple-Harmonic-Components-/-Fourier-Components-1","page":"Fourier Components/Series","title":"Simple Harmonic Components / Fourier Components","text":"","category":"section"},{"location":"examples/Fourier/#Simple-Harmonic-Components-1","page":"Fourier Components/Series","title":"Simple Harmonic Components","text":"","category":"section"},{"location":"examples/Fourier/#","page":"Fourier Components/Series","title":"Fourier Components/Series","text":"A simple harmonic component (SHC) or Fourier component has a constant instantaneous amplitude","category":"page"},{"location":"examples/Fourier/#","page":"Fourier Components/Series","title":"Fourier Components/Series","text":"a_0(t)rightarrow a_0","category":"page"},{"location":"examples/Fourier/#","page":"Fourier Components/Series","title":"Fourier Components/Series","text":"and constant instantaneous frequency","category":"page"},{"location":"examples/Fourier/#","page":"Fourier Components/Series","title":"Fourier Components/Series","text":"omega_0(t)rightarrow omega_0","category":"page"},{"location":"examples/Fourier/#","page":"Fourier Components/Series","title":"Fourier Components/Series","text":"and thus corresponds to a canonical triplet with the form","category":"page"},{"location":"examples/Fourier/#","page":"Fourier Components/Series","title":"Fourier Components/Series","text":"mathscrC_0 = lefta_0omega_0 phi_0vphantom0^0right","category":"page"},{"location":"examples/Fourier/#","page":"Fourier Components/Series","title":"Fourier Components/Series","text":"and a component of the form","category":"page"},{"location":"examples/Fourier/#","page":"Fourier Components/Series","title":"Fourier Components/Series","text":"psi_0(t) = a_0 mathrme^mathrmj(omega_0 t +phi_0)","category":"page"},{"location":"examples/Fourier/#","page":"Fourier Components/Series","title":"Fourier Components/Series","text":"using ISA, Plots, Interact\r\n@manipulate for a= 0:0.05:1, ω = -5:0.1:20, φ = -pi:pi/50:pi\r\n    a₀(t) = a\r\n    ω₀(t) = ω\r\n    φ₀ = φ\r\n    𝐶₀ = AMFMcomp(a₀,ω₀,φ₀)\r\n    plot(𝐶₀)\r\nend","category":"page"},{"location":"examples/Fourier/#","page":"Fourier Components/Series","title":"Fourier Components/Series","text":"[IMAGE HERE]","category":"page"},{"location":"examples/Fourier/#Fourier-Series-1","page":"Fourier Components/Series","title":"Fourier Series","text":"","category":"section"},{"location":"examples/Fourier/#","page":"Fourier Components/Series","title":"Fourier Components/Series","text":"Next consider a component set consisting of a set of harmonicly related SHCs","category":"page"},{"location":"examples/Fourier/#","page":"Fourier Components/Series","title":"Fourier Components/Series","text":"mathscrStriangleqleftcdotsmathscrC_0mathscrC_1cdotsrightmathscrC_k = lefta_kkomega_0 phi_kvphantom0^0right","category":"page"},{"location":"examples/Fourier/#","page":"Fourier Components/Series","title":"Fourier Components/Series","text":"Then the AM–FM model corresponding to the this set is a Fourier Series","category":"page"},{"location":"examples/Fourier/#","page":"Fourier Components/Series","title":"Fourier Components/Series","text":"z(t) = sumlimits_k=-infty^infty a_k mathrme^mathrmj(komega_0 t +phi_k)","category":"page"},{"location":"examples/Fourier/#","page":"Fourier Components/Series","title":"Fourier Components/Series","text":"using ISA, Plots\r\nT = 1.0\r\naₖ(k) = 1.0\r\nkInds = collect(-25:25)\r\nz = fourierSeries(T, aₖ, kInds)\r\nplot(z; timeaxis=-1.0:0.001:1.0)","category":"page"},{"location":"examples/Fourier/#","page":"Fourier Components/Series","title":"Fourier Components/Series","text":"(Image: )","category":"page"},{"location":"theory/#Instantaneous-Spectral-Analysis-Theory-1","page":"Instantaneous Spectral Analysis Theory","title":"Instantaneous Spectral Analysis Theory","text":"","category":"section"},{"location":"theory/#Canonical-Triplets-and-AM–FM-Components-1","page":"Instantaneous Spectral Analysis Theory","title":"Canonical Triplets and AM–FM Components","text":"","category":"section"},{"location":"theory/#Component-Sets-and-AM–FM-Models-1","page":"Instantaneous Spectral Analysis Theory","title":"Component Sets and AM–FM Models","text":"","category":"section"},{"location":"theory/#Instantaneous-Spectra-1","page":"Instantaneous Spectral Analysis Theory","title":"Instantaneous Spectra","text":"","category":"section"},{"location":"theory/#More-Information-1","page":"Instantaneous Spectral Analysis Theory","title":"More Information","text":"","category":"section"},{"location":"theory/#","page":"Instantaneous Spectral Analysis Theory","title":"Instantaneous Spectral Analysis Theory","text":"For additional mathematical details as well as information regarding 2D and 3D visualization of the IS we refer the reader to:","category":"page"},{"location":"theory/#","page":"Instantaneous Spectral Analysis Theory","title":"Instantaneous Spectral Analysis Theory","text":"S. Sandoval, and P L. De Leon. \"The Instantaneous Spectrum: A General Framework for Time-Frequency Analysis.\" IEEE Transactions on Signal Processing, vol. 66, pp. 5679–5693, Nov. 2018.","category":"page"},{"location":"basics/spectra/#Instantaneous-Spectra-1","page":"Instantaneous Spectra","title":"Instantaneous Spectra","text":"","category":"section"},{"location":"basics/spectra/#","page":"Instantaneous Spectra","title":"Instantaneous Spectra","text":"A component set compSet maps to an instantaneous spectrum (IS).","category":"page"},{"location":"basics/spectra/#","page":"Instantaneous Spectra","title":"Instantaneous Spectra","text":"The two-dimensional (2D) IS in the time-frequency coordinates for a signal expressed with set of canonical triplets  mathscrS=mathscrC_0mathscrC_1cdotsmathscrC_K-1 is given by","category":"page"},{"location":"basics/spectra/#","page":"Instantaneous Spectra","title":"Instantaneous Spectra","text":"mathcalS(tomegamathscrS)  =  2 pi sumlimits_k=0^K-1 psi_kleft( t  mathscrC_k vphantom0^0right)deltaleft(vphantom0^0omega-omega_k(t)vphantom0^0right)","category":"page"},{"location":"basics/spectra/#","page":"Instantaneous Spectra","title":"Instantaneous Spectra","text":"and  three-dimensional (3D) IS in the time-frequency-real coordinates is given by","category":"page"},{"location":"basics/spectra/#","page":"Instantaneous Spectra","title":"Instantaneous Spectra","text":"mathcalS(tomegasmathscrS) = 2 pi sumlimits_k=0^K-1 psi_kleft( t  mathscrC_k vphantom0^0right) ^2deltaleft(omega-omega_k(t)s-s_k(t)vphantom0^0right)","category":"page"},{"location":"basics/spectra/#","page":"Instantaneous Spectra","title":"Instantaneous Spectra","text":"where delta(cdot) is the Dirac delta.","category":"page"},{"location":"basics/spectra/#Visualizing-Instantaneous-Spectra-1","page":"Instantaneous Spectra","title":"Visualizing Instantaneous Spectra","text":"","category":"section"},{"location":"basics/spectra/#","page":"Instantaneous Spectra","title":"Instantaneous Spectra","text":"We can visualize a 3D IS using the pre-defined plotting recipes as follows. First, define a component set, then pass it to the 'plot()' along with the time range.","category":"page"},{"location":"basics/spectra/#","page":"Instantaneous Spectra","title":"Instantaneous Spectra","text":"using ISA, Plots\n𝐶₀ = AMFMtriplet(t->exp(-t^2),t->200.0,0.0)\n𝐶₁ = AMFMtriplet(t->1.0,t->100*t,0.1)\n𝐶₂ = AMFMtriplet(t->0.8*cos(2t),t->100 + 70.5*sin(5t),π)\n𝑆 = compSet([𝐶₀,𝐶₁,𝐶₂])\nplot(𝑆; timeaxis=0.0:0.001:3.0)","category":"page"},{"location":"basics/spectra/#","page":"Instantaneous Spectra","title":"Instantaneous Spectra","text":"(Image: )","category":"page"},{"location":"basics/spectra/#","page":"Instantaneous Spectra","title":"Instantaneous Spectra","text":"We can obtain a 2D IS plot via an orthographic projection of the 3D IS","category":"page"},{"location":"basics/spectra/#","page":"Instantaneous Spectra","title":"Instantaneous Spectra","text":"using ISA, Plots\n𝐶₀ = AMFMtriplet(t->exp(-t^2/5),t->200.0,0.0)\n𝐶₁ = AMFMtriplet(t->1.0,t->100*t,0.1)\n𝐶₂ = AMFMtriplet(t->0.8*cos(11t),t->100 + 70.5*sin(5t),π)\n𝑆 = compSet([𝐶₀,𝐶₁,𝐶₂])\nplot(𝑆; timeaxis=0.0:0.001:3.0,camera=(0,90), zlabel=\"\", zticks=:false,  left_margin=15Plots.mm, margin=5Plots.mm, yrotation = 90)","category":"page"},{"location":"basics/spectra/#","page":"Instantaneous Spectra","title":"Instantaneous Spectra","text":"(Image: )","category":"page"},{"location":"numerical/components/#Numerical-AM–FM-Components-1","page":"Numerical AM–FM Components","title":"Numerical AM–FM Components","text":"","category":"section"},{"location":"numerical/components/#","page":"Numerical AM–FM Components","title":"Numerical AM–FM Components","text":"A numerical AM–FM component numComp is parameterized by the discrete-time observation of a (complex-valued) AM–FM component AMFMcomp.","category":"page"},{"location":"numerical/components/#","page":"Numerical AM–FM Components","title":"Numerical AM–FM Components","text":"using ISA\n𝐶₀ = AMFMtriplet(t->exp(-t^2), t->2.0, 0.0)\nψ₀ = AMFMcomp(𝐶₀)\nfs = 16_000\n𝛹 = numComp( ψ₀(0:1/fs:1), fs )","category":"page"},{"location":"numerical/components/#","page":"Numerical AM–FM Components","title":"Numerical AM–FM Components","text":"A demodulated AM–FM component demodComp is returned by calling AMFMdemod() with a numerical AM–FM component numComp.","category":"page"},{"location":"numerical/components/#","page":"Numerical AM–FM Components","title":"Numerical AM–FM Components","text":"using ISA\n𝐶₀ = AMFMtriplet(t->exp(-t^2), t->2.0, 0.0)\nψ₀ = AMFMcomp(𝐶₀)\nfs = 16_000\n𝛹 = numComp( ψ₀(0:1/fs:1), fs )\n𝚿 = AMFMdemod(𝛹)","category":"page"},{"location":"cite/#Cite-1","page":"Cite","title":"Cite","text":"","category":"section"},{"location":"cite/#","page":"Cite","title":"Cite","text":"If you use this software in you research, please cite the following works.","category":"page"},{"location":"cite/#","page":"Cite","title":"Cite","text":"S. Sandoval, and P L. De Leon. \"The Instantaneous Spectrum: A General Framework for Time-Frequency Analysis.\" IEEE Transactions on Signal Processing, vol. 66, pp. 5679–5693, Nov. 2018.","category":"page"},{"location":"cite/#","page":"Cite","title":"Cite","text":"@article{Sandoval2018ISA,\n           title = {The Instantaneous Spectrum: A General Framework for\n                    Time-Frequency Analysis},\n           author = {S.~Sandoval and P.~L.~{De~Leon}},\n           journal = {{IEEE Trans.~Signal Process.}},\n           volume = {66},\n           year = {2018},\n           month = {Nov},\n           pages = {5679-5693}\n}","category":"page"},{"location":"cite/#","page":"Cite","title":"Cite","text":"S. Sandoval, H. Alshammari, and M. Dalal, \"ISA.jl: Instantaneous Spectral Analysis in Julia\", in preparation.","category":"page"},{"location":"cite/#","page":"Cite","title":"Cite","text":"@article{Sandoval2022ISA,\n           title = {ISA.jl: Instantaneous Spectral Analysis in Julia},\n           author = {S.~Sandoval, H.~Alshammari, and M.~Dalal},\n           notes = {in preparation}\n}","category":"page"},{"location":"basics/components/#AM–FM-Components-1","page":"AM–FM Components","title":"AM–FM Components","text":"","category":"section"},{"location":"basics/components/#","page":"AM–FM Components","title":"AM–FM Components","text":"An AM–FM component psi_k (AMFMcomp) is parameterized by canonical triplet mathscrC (AMFMtriplet).","category":"page"},{"location":"basics/components/#","page":"AM–FM Components","title":"AM–FM Components","text":"psi_k left( t  mathscrC_k vphantom0^0right) triangleq a_k(t) expleft(mathrmj leftint_-infty^t omega_k(tau)mathrmdtau +phi_kright right)","category":"page"},{"location":"basics/components/#Defining-an-AM–FM-Component-1","page":"AM–FM Components","title":"Defining an AM–FM Component","text":"","category":"section"},{"location":"basics/components/#","page":"AM–FM Components","title":"AM–FM Components","text":"We can define a  AM–FM component psi_k (AMFMcomp) by calling AMFMcomp() with a canonical triplet mathscrC (AMFMtriplet).","category":"page"},{"location":"basics/components/#","page":"AM–FM Components","title":"AM–FM Components","text":" using ISA\n 𝐶₀ = AMFMtriplet(t->exp(-t^2),t->2.0,0.0)\n ψ₀ = AMFMcomp(𝐶₀)","category":"page"},{"location":"basics/components/#","page":"AM–FM Components","title":"AM–FM Components","text":"For convenience, we can also define an  AM–FM component psi_k (AMFMcomp) by calling AMFMcomp() withteh parameters of canonical triplet, specifically, an IA a(t) (Function)  and IF omega(t) (Function) which are both real-valued functions of a (real-valued) time variable, and a phase reference phi (Real) which is a real number.","category":"page"},{"location":"basics/components/#","page":"AM–FM Components","title":"AM–FM Components","text":" using ISA\n ψ₀ = AMFMcomp(t->exp(-t^2),t->2.0,0.0)","category":"page"},{"location":"basics/components/#Evaluating-an-AM–FM-Component-1","page":"AM–FM Components","title":"Evaluating an AM–FM Component","text":"","category":"section"},{"location":"basics/components/#","page":"AM–FM Components","title":"AM–FM Components","text":"Once an  AM–FM component psi_k (AMFMcomp) is defined, it can be evaluated at a time instant t_0 (Real)","category":"page"},{"location":"basics/components/#","page":"AM–FM Components","title":"AM–FM Components","text":" using ISA\n 𝐶₀ = AMFMtriplet(t->exp(-t^2), t->2.0, 0.0)\n ψ₀ = AMFMcomp(𝐶₀)\n t₀ = 0.15\n ψ₀(t₀)","category":"page"},{"location":"basics/components/#","page":"AM–FM Components","title":"AM–FM Components","text":"or over a range of time instants.","category":"page"},{"location":"basics/components/#","page":"AM–FM Components","title":"AM–FM Components","text":" using ISA\n 𝐶₀ = AMFMtriplet(t->exp(-t^2), t->2.0, 0.0)\n ψ₀ = AMFMcomp(𝐶₀)\n t = 0.0:0.25:1.0\n ψ₀(t)","category":"page"},{"location":"examples/AMFM/#Amplitude-Modulation–Frequency-Modulation-(AM–FM)-Components-1","page":"AM–FM Components","title":"Amplitude Modulation–Frequency Modulation (AM–FM) Components","text":"","category":"section"},{"location":"#[ISA.jl:-Instantaneous-Spectral-Analysis-in-Julia](https://github.com/NMSU-ISA/ISA/)-1","page":"Home","title":"ISA.jl: Instantaneous Spectral Analysis in Julia","text":"","category":"section"},{"location":"#Installation-1","page":"Home","title":"Installation","text":"","category":"section"},{"location":"#Users-1","page":"Home","title":"Users","text":"","category":"section"},{"location":"#","page":"Home","title":"Home","text":"Download Julia v1.6.4 or later, if you haven't already.\nAdd the ISA module entering the following at the REPL ]add https://github.com/NMSU-ISA/ISA.","category":"page"},{"location":"#Student-Developers-1","page":"Home","title":"Student Developers","text":"","category":"section"},{"location":"#","page":"Home","title":"Home","text":"Clone the ISA module to username/.julia/dev/.\nEnter the package manager in REPL by pressing ]  then add the package by typing dev ISA rather than add ISA.","category":"page"},{"location":"#Table-of-Contents-1","page":"Home","title":"Table of Contents","text":"","category":"section"},{"location":"#","page":"Home","title":"Home","text":"Pages = [\"theory.md\",\n         \"basics/triplets.md\",\n         \"basics/components.md\",\n         \"basics/models.md\",\n         \"basics/spectra.md\",\n         \"numerical/componentsNumerical.md\",\n         \"typesMethods.md\",\n         \"cite.md\",\n         ]","category":"page"}]
}
