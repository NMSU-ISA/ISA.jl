path = "docs/src/assets/"

using ISA, Plots
𝐶₀ = AMFMtriplet(t->1,t->t^2,0.0)
ψ₀ = AMFMcomp(𝐶₀)
plot(ψ₀; timeaxis=0.0:0.001:10.0)
png(path*"IS_exFM1.png")

using ISA, Plots
𝐶₀ = AMFMtriplet(t->1,t->t^2,0.0)
ψ₀ = AMFMcomp(𝐶₀)
plot(𝐶₀; timeaxis=0.0:0.001:10.0)
png(path*"IS_exFM2.png")

using ISA, Plots
𝐶₀ = AMFMtriplet(t->1,t->t^2,0.0)
ψ₀ = AMFMcomp(𝐶₀)
plot(𝐶₀; timeaxis=0.0:0.001:10.0, view="TF",
     left_margin=15Plots.mm, margin=5Plots.mm)
png(path*"IS_exFM3.png")

# ----------------

using ISA, Plots
𝐶₀ = AMFMtriplet(t->1,t->25+20*sin(t),0.0)
ψ₀ = AMFMcomp(𝐶₀)
plot(ψ₀; timeaxis=0.0:0.001:10.0)
png(path*"IS_exFM4.png")

using ISA, Plots
𝐶₀ = AMFMtriplet(t->1,t->25+20*sin(t),0.0)
ψ₀ = AMFMcomp(𝐶₀)
plot(𝐶₀; timeaxis=0.0:0.001:10.0)
png(path*"IS_exFM5.png")

using ISA, Plots
𝐶₀ = AMFMtriplet(t->1,t->25+20*sin(t),0.0)
ψ₀ = AMFMcomp(𝐶₀)
plot(𝐶₀; timeaxis=0.0:0.001:10.0, view="TF",
     left_margin=15Plots.mm, margin=5Plots.mm)
png(path*"IS_exFM6.png")


#--------------------

using ISA, Plots
𝐶₀ = AMFMtriplet(t->1,t->exp(0.5t)+10*t,1.0)
ψ₀ = AMFMcomp(𝐶₀)
plot(ψ₀; timeaxis=0.0:0.001:10.0)
png(path*"IS_exFM7.png")

using ISA, Plots
𝐶₀ = AMFMtriplet(t->1,t->exp(0.5t)+10*t,1.0)
ψ₀ = AMFMcomp(𝐶₀)
plot(𝐶₀; timeaxis=0.0:0.001:10.0)
png(path*"IS_exFM8.png")

using ISA, Plots
𝐶₀ = AMFMtriplet(t->1,t->exp(0.5t)+10*t,1.0)
ψ₀ = AMFMcomp(𝐶₀)
plot(𝐶₀; timeaxis=0.0:0.001:10.0, view="TF",
     left_margin=15Plots.mm, margin=5Plots.mm)
png(path*"IS_exFM9.png")
