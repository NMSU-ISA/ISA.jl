
struct compSet
  S::Vector{AMFMtriplet}
end

mutable struct AMFMmodel
  S::compSet
end

 # Method - 1

function (z::AMFMmodel)(t::Vector{<:Real})
#References: Sandoval, Steven, and Phillip L. De Leon. "The Instantaneous Spectrum: A General Framework for Time-Frequency Analysis." IEEE Transactions on Signal Processing 66.21 (2018): 5679-5693.
  out = zeros(size(t))
  for k∈1:length(z.S.S)
    ψ = AMFMcomp(z.S.S[k])
    out += ψ(t)
  end
  return out
end

function compSet(W::Vector{AMFMcomp})
  temp = []
  for i ∈ 1:length(W)
    push!(temp,W[i].C)
  end
  return compSet(Vector(temp))
end

# Method - 2 (by passing an array of ψ) like  z = AMFMmodel([ψ₀,ψ₁,ψ₂])
function AMFMmodel(W::Vector{AMFMcomp})
        return AMFMmodel(compSet(W))
end
# Method - 3 (by passing an array of triplets, C) z = AMFMmodel([C₀,C₁,C₂])
function AMFMmodel(X::Vector{AMFMtriplet})
  return  AMFMmodel(compSet(X))
end

function (z::AMFMmodel)(t::Real)
  return (z::AMFMmodel)([t])[1]
end

function (z::AMFMmodel)(t::StepRangeLen)
  return (z::AMFMmodel)(collect(t))
end

function (z::AMFMmodel)(t::UnitRange)
  return (z::AMFMmodel)(collect(t))
end