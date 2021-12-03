#References: Sandoval, Steven, and Phillip L. De Leon. "The Instantaneous Spectrum: A General Framework for Time-Frequency Analysis." IEEE Transactions on Signal Processing 66.21 (2018): 5679-5693.

using DSP #for phase unwrapping

# ----------------------
# NUMERICAL DEMODULATION
# ----------------------
"""
    𝚿 = AMFMdemod(Ψ)

Create a demodComp' from a 'numComp'.

# Examples
```jldoctest
julia>

<EXAMPLE HERE>

```
"""
function AMFMdemod(Ψ::numComp; derivMethod="center11")::demodComp
  return demodComp( Ψ.Ψ,
                    Ψ.t,
                    Ψ.fs,
                    abs.(Ψ.Ψ),
                    derivApprox(unwrap(angle.(Ψ.Ψ)),fs=Ψ.fs, method=derivMethod),
                    real.(Ψ.Ψ),
                    imag.(Ψ.Ψ),
                    unwrap(angle.(Ψ.Ψ)),
                     )
end

# ----------------------
# NUMERICAL DIFFERENTIATION
# ----------------------
"""
    f′ = derivApprox(f; fs, method)

Numerically approximate the derivative of a sampled signal.

Called with a single input 'f', is equivalent to `derivApprox(f, fs=1.0, method="center11")`.

# Examples
```jldoctest
julia>

<EXAMPLE HERE>

```
"""
function derivApprox(x::Vector{Float64}; fs=1.0, method="center11")::Vector{Float64} #http://www.holoborodko.com/pavel/numerical-methods/numerical-derivative/central-differences/

    if method == "forward"
        if length(x)<2; error("derivApprox:vector too short for selected method"); end
        x′ = append!([NaN],fs.*diff(x))
    end
    if method == "backward"
        if length(x)<2; error("derivApprox:vector too short for selected method"); end
        x′ = append!(fs.*diff(x),[NaN])
    end
    if method == "center3"
        if length(x)<3; error("derivApprox:vector too short for selected method"); end
        x′ = append!( append!([NaN], fs.*(x[3:end]-x[1:end-2])./2.0 ) ,[NaN])
    end
    if method == "center5"
        if length(x)<5; error("derivApprox:vector too short for selected method"); end
        x′ = append!( append!(NaN*ones(Float64,2), fs.*(x[1:end-4]-8.0.*x[2:end-3]+8.0.*x[4:end-1]-x[5:end])./12.0 ) ,NaN*ones(Float64,2))
    end
    if method == "center7"
        if length(x)<7; error("derivApprox:vector too short for selected method"); end
        x′ = append!( append!(NaN*ones(Float64,3), fs.*(-x[1:end-6]+ 9.0.*x[2:end-5]- 45.0.*x[3:end-4] +45.0.*x[5:end-2] -9.0.*x[6:end-1] + x[7:end]   )./60.0
 ) ,NaN*ones(Float64,3))
    end
    if method == "center9"
        if length(x)<9; error("derivApprox:vector too short for selected method"); end
        x′ = append!( append!(NaN*ones(Float64,4), fs.*(3.0.*x[1:end-8] - 32.0.*x[2:end-7] + 168.0.*x[3:end-6] -672.0.*x[4:end-5] + 672.0.*x[6:end-3] -168.0.*x[7:end-2] + 32.0.*x[8:end-1] -3.0.*x[9:end]  )./840.0
 ) ,NaN*ones(Float64,4))
    end
    if method == "center11"
        if length(x)<11; error("derivApprox:vector too short for selected method"); end
        x′ = append!( append!(NaN*ones(Float64,5), fs.*(-2.0.*x[1:end-10] +25.0.*x[2:end-9] -150.0.*x[3:end-8] +600.0.*x[4:end-7] -2100.0.*x[5:end-6] + 2100.0.*x[7:end-4]  -600.0.*x[8:end-3] +150.0.*x[9:end-2] -25.0.*x[10:end-1] +2.0.*x[11:end]  )./2520.0
 ) ,NaN*ones(Float64,5))
    end
    if method == "center13"
        if length(x)<13; error("derivApprox:vector too short for selected method"); end
        x′ = append!( append!(NaN*ones(Float64,6), fs.*(5.0.*x[1:end-12] - 72.0.*x[2:end-11] + 495.0.*x[3:end-10] -2200.0.*x[4:end-9]   +7425.0.*x[5:end-8]  -23760.0.*x[6:end-7]  +23760.0.*x[8:end-5]   + -7425.0.*x[9:end-4]   + 2200.0.*x[10:end-3] -495.0.*x[11:end-2] + 72.0.*x[12:end-1] -5.0.*x[13:end]  )./27720.0
 ) ,NaN*ones(Float64,6))
    end
    return x′
end