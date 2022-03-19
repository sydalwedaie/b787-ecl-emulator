const cashe = [
	"/",
	"/assets/css/styles.css",
	"/assets/fonts/futura.eot",
	"/assets/fonts/futura.ttf",
	"/assets/fonts/futura.woff",
	"/normal-menu.html",
	"/resets.html",
	"404.html",
	"/nnc/index.html",
	"/nnc/air/equip/equip-clg-ovrd-aft.html",
	"/nnc/air/equip/equip-clg-ovrd-fwd.html",
	"/nnc/air/equip/equip-cooling-aft.html",
	"/nnc/air/equip/equip-cooling-fwd.html",
	"/nnc/air/equip/equip-ovbo-vlv-aft.html",
	"/nnc/air/equip/equip-ovrd-vlv-aft.html",
	"/nnc/air/equip/equip-ovro-vlv-fwd.html",
	"/nnc/air/pack/pack-altitude-limit.html",
	"/nnc/air/pack/pack-l.html",
	"/nnc/air/pack/pack-r.html",
	"/nnc/air/pack/pack-l-r.html",
	"/nnc/air/pack/pack-mode-l.html",
	"/nnc/air/pack/pack-mode-r.html",
	"/nnc/air/pack/recirc-fan-lwr-off.html",
	"/nnc/air/pack/recirc-fan-upr-off.html",
	"/nnc/air/pack/trim-air-l.html",
	"/nnc/air/pack/trim-air-r.html",
	"/nnc/air/equip/index.html",
	"/nnc/air/pack/index.html",
	"/nnc/air/cabin-altitude.html",
	"/nnc/air/cabin-altitude-auto.html",
	"/nnc/air/cabin-temp-cold.html",
	"/nnc/air/cabin-temp-hot.html",
	"/nnc/air/cabin-temperature.html",
	"/nnc/air/cargo-heat-bulk.html",
	"/nnc/air/cargo-heat-fwd.html",
	"/nnc/air/landing-altitude.html",
	"/nnc/air/liquid-clg-qty-l.html",
	"/nnc/air/liquio-clg-qty-r.html",
	"/nnc/air/liquid-cooling-l.html",
	"/nnc/air/liquid-cooling-r.html",
	"/nnc/air/outflow-valve-aft.html",
	"/nnc/air/outflow-valve-fwd.html",
	"/nnc/air/ventilation-altn.html",
	"/nnc/anti-ice/anti-ice/anti-ice-det-wing.html",
	"/nnc/anti-ice/anti-ice/anti-ice-eng-l.html",
	"/nnc/anti-ice/anti-ice/anti-ice-eng-r.html",
	"/nnc/anti-ice/anti-ice/anti-ice-leak-eng-l.html",
	"/nnc/anti-ice/anti-ice/anti-ice-leak-eng-r.html",
	"/nnc/anti-ice/anti-ice/anti-ice-loss-eng-l.html",
	"/nnc/anti-ice/anti-ice/anti-ice-loss-eng-r.html",
	"/nnc/anti-ice/anti-ice/anti-ice-on.html",
	"/nnc/anti-ice/anti-ice/anti-ice-packs.html",
	"/nnc/anti-ice/anti-ice/anti-ice-wing.html",
	"/nnc/anti-ice/anti-ice/wing-anti-ice-off.html",
	"/nnc/anti-ice/anti-ice/index.html",
	"/nnc/anti-ice/heat-pitot-c.html",
	"/nnc/anti-ice/heat-pitot-l.html",
	"/nnc/anti-ice/heat-pitot-l-c-r.html",
	"/nnc/anti-ice/heat-pitot-r.html",
	"/nnc/anti-ice/ice-crystal-icing.html",
	"/nnc/anti-ice/ice-detectors.html",
	"/nnc/anti-ice/icing-eng.html",
	"/nnc/anti-ice/window-heat.html",
	"/nnc/anti-ice/window-heat-l-fwd.html",
	"/nnc/anti-ice/window-heat-r-fwd.html",
	"/nnc/anti-ice/window-heat-l-side.html",
	"/nnc/anti-ice/window-heat-r-side.html",
	"/nnc/autoflight/ap-backdrive-column.html",
	"/nnc/autoflight/ap-backdrive-pedal.html",
	"/nnc/autoflight/ap-backdrive-wheel.html",
	"/nnc/autoflight/autopilot.html",
	"/nnc/autoflight/autopilot-disc.html",
	"/nnc/autoflight/autothrottle-disc.html",
	"/nnc/autoflight/autothrottlel.html",
	"/nnc/autoflight/autothrottle-r.html",
	"/nnc/autoflight/no-autoland.html",
	"/nnc/autoflight/no-autoland-gls.html",
	"/nnc/autoflight/no-autoland-ils.html",
	"/nnc/autoflight/no-land-3.html",
	"/nnc/autoflight/to-thrust-disagree.html",
	"/nnc/comms/datalink-lost.html",
	"/nnc/comms/datalink-sys.html",
	"/nnc/comms/hf-datalink.html",
	"/nnc/comms/radio-transmit-capt.html",
	"/nnc/comms/radio-transmit-f-o.html",
	"/nnc/comms/radio-transmit-obs.html",
	"/nnc/comms/satcom.html",
	"/nnc/comms/satcom-datalink.html",
	"/nnc/comms/satvoice-lost.html",
	"/nnc/comms/vhf-datalink.html",
	"/nnc/elec/apu-battery.html",
	"/nnc/elec/elec-ac-bus-l1.html",
	"/nnc/elec/elec-ac-bus-l2.html",
	"/nnc/elec/elec-ac-bus-r1.html",
	"/nnc/elec/elec-ac-bus-r2.html",
	"/nnc/elec/elec-battery-off.html",
	"/nnc/elec/elec-cabin-util-off.html",
	"/nnc/elec/elec-gen-drive-l1.html",
	"/nnc/elec/elec-gen-drive-l2.html",
	"/nnc/elec/elec-gen-drive-r1.html",
	"/nnc/elec/elec-gen-drive-r2.html",
	"/nnc/elec/elec-gen-off-apu-l.html",
	"/nnc/elec/elec-gen-off-apu-r.html",
	"/nnc/elec/elec-gen-off-l1.html",
	"/nnc/elec/elec-gen-off-l2.html",
	"/nnc/elec/elec-gen-off-r1.html",
	"/nnc/elec/elec-gen-off-r2.html",
	"/nnc/elec/elec-ife-seats-off.html",
	"/nnc/elec/elec-standby-sys.html",
	"/nnc/elec/main-battery.html",
	"/nnc/elec/main-battery-disch.html",
	"/nnc/elec/main-battery-low.html",
	"/nnc/engine/damage/apu-shutdown.html",
	"/nnc/engine/damage/dual-eng-fail-stall.html",
	"/nnc/engine/damage/eng-fail-l.html",
	"/nnc/engine/damage/eng-fail-r.html",
	"/nnc/engine/damage/eng-shutdown.html",
	"/nnc/engine/damage/eng-shutdown-l.html",
	"/nnc/engine/damage/eng-shutdown-r.html",
	"/nnc/engine/damage/eng-svr-damage-sep-l.html",
	"/nnc/engine/damage/eng-svr-damage-sep-r.html",
	"/nnc/engine/damage/eng-thrust-l.html",
	"/nnc/engine/damage/eng-thrust-r.html",
	"/nnc/engine/damage/eng-thrust-high-l.html",
	"/nnc/engine/damage/eng-thrust-high-r.html",
	"/nnc/engine/damage/thrust-asym-prot.html",
	"/nnc/engine/limit/apu-limit.html",
	"/nnc/engine/limit/eng-limit-exceed-l.html",
	"/nnc/engine/limit/eng-limit-exceed-r.html",
	"/nnc/engine/limit/eng-limit-prot-l.html",
	"/nnc/engine/limit/eng-limit-prot-r.html",
	"/nnc/engine/limit/eng-oil-press-l.html",
	"/nnc/engine/limit/eng-oil-press-r.html",
	"/nnc/engine/limit/eng-oil-temp-l.html",
	"/nnc/engine/limit/eng-oil-temp-r.html",
	"/nnc/engine/limit/eng-rev-air-gnd.html",
	"/nnc/engine/limit/eng-rev-commanded-l.html",
	"/nnc/engine/limit/eng-rev-commanded-r.html",
	"/nnc/engine/limit/eng-rev-limited-l.html",
	"/nnc/engine/limit/eng-rev-limited-r.html",
	"/nnc/engine/limit/eng-reverser-l.html",
	"/nnc/engine/limit/eng-reverser-r.html",
	"/nnc/engine/rpm/aborted-engine-start-l.html",
	"/nnc/engine/rpm/aborted-engine-start-r.html",
	"/nnc/engine/rpm/eng-autostart-l.html",
	"/nnc/engine/rpm/eng-autostart-r.html",
	"/nnc/engine/rpm/eng-in-flight-start-l.html",
	"/nnc/engine/rpm/eng-in-flight-start-r.html",
	"/nnc/engine/rpm/eng-rpm-limited-l.html",
	"/nnc/engine/rpm/eng-rpm-limited-r.html",
	"/nnc/engine/rpm/eng-start-cutout-l.html",
	"/nnc/engine/rpm/eng-start-cutout-r.html",
	"/nnc/engine/rpm/eng-starters-l.html",
	"/nnc/engine/rpm/eng-starters-r.html",
	"/nnc/engine/damage/index.html",
	"/nnc/engine/limit/index.html",
	"/nnc/engine/rpm/index.html",
	"/nnc/engine/eng-control-l.html",
	"/nnc/engine/eng-control-r.html",
	"/nnc/engine/eng-core-anti-ice-l.html",
	"/nnc/engine/eng-core-anti-ice-r.html",
	"/nnc/engine/eng-eec-mode-l.html",
	"/nnc/engine/eng-eec-mode-r.html",
	"/nnc/engine/eng-fuel-filter-l.html",
	"/nnc/engine/eng-fuel-filter-r.html",
	"/nnc/engine/eng-fuel-filter-l+r.html",
	"/nnc/engine/eng-fuel-valve-l.html",
	"/nnc/engine/eng-fuel-valve-r.html",
	"/nnc/engine/eng-sec-air-vlv-l.html",
	"/nnc/engine/eng-sec-air-vly-r.html",
	"/nnc/engine/eng-surge-l.html",
	"/nnc/engine/eng-surge-r.html",
	"/nnc/engine/eng-turb-damage-l.html",
	"/nnc/engine/eng-turb-damage-r.html",
	"/nnc/engine/volcanic-ash.html",
	"/nnc/fire/bottle/bottle-1-disch-eng.html",
	"/nnc/fire/bottle/bottle-2-disch-eng.html",
	"/nnc/fire/bottle/bottle-disch-apu.html",
	"/nnc/fire/bottle/bottle-disch-cargo.html",
	"/nnc/fire/bottle/det-fire-apu.html",
	"/nnc/fire/bottle/det-fire-cargo-aft.html",
	"/nnc/fire/bottle/det-fire-cargo-fwd.html",
	"/nnc/fire/bottle/det-fire-eng-l.html",
	"/nnc/fire/bottle/det-fire-eng-r.html",
	"/nnc/fire/fire/fire-eng-on-ground-l.html",
	"/nnc/fire/fire/fire-eng-on-ground-r.html",
	"/nnc/fire/fire/fire-eng-tailpipe-l.html",
	"/nnc/fire/fire/fire-eng-tailpipe-r.html",
	"/nnc/fire/fire/smoke-fire-or-fumes.html",
	"/nnc/fire/fire/smoke-or-fumes-removal.html",
	"/nnc/fire/bottle/index.html",
	"/nnc/fire/fire/index.html",
	"/nnc/fire/fire-apu.html",
	"/nnc/fire/fire-cargo-aft.html",
	"/nnc/fire/fire-cargo-fwd.html",
	"/nnc/fire/fire-eng-l.html",
	"/nnc/fire/fire-eng-r.html",
	"/nnc/fire/fire-wheel-well.html",
	"/nnc/fire/overheat-eng-l.html",
	"/nnc/fire/overheat-eng-r.html",
	"/nnc/fire/overheat-wheel-well.html",
	"/nnc/fire/smoke-equip-clg-aft.html",
	"/nnc/fire/smoke-equip-clg-fwd.html",
	"/nnc/fire/smoke-equip-clg-misc.html",
	"/nnc/fire/smoke-lavatory.html",
	"/nnc/fire/smoke-rest-upr-dr-4.html",
	"/nnc/flight-controls/flaps/cruise-flaps-sys.html",
	"/nnc/flight-controls/flaps/flap-slat-control.html",
	"/nnc/flight-controls/flaps/flaps-drive.html",
	"/nnc/flight-controls/flaps/flaps-primary-fail.html",
	"/nnc/flight-controls/flaps/flaps-slats-fail.html",
	"/nnc/flight-controls/flaps/slats-drive.html",
	"/nnc/flight-controls/flaps/slats-primary-fail.html",
	"/nnc/flight-controls/flaps/index.html",
	"/nnc/flight-controls/auto-speedbrake.html",
	"/nnc/flight-controls/flight-control-mode.html",
	"/nnc/flight-controls/flight-controls.html",
	"/nnc/flight-controls/flt-controls-locked.html",
	"/nnc/flight-controls/jammed-flight-controls.html",
	"/nnc/flight-controls/pitch-down-authority.html",
	"/nnc/flight-controls/pitch-up-authority.html",
	"/nnc/flight-controls/pri-flight-computers.html",
	"/nnc/flight-controls/roll-yaw-asymmetry.html",
	"/nnc/flight-controls/roll-left-authority.html",
	"/nnc/flight-controls/roll-right-authority.html",
	"/nnc/flight-controls/speedbrake-extended.html",
	"/nnc/flight-controls/spoiler-drag.html",
	"/nnc/flight-controls/spoiler-pairs.html",
	"/nnc/flight-controls/spoilers.html",
	"/nnc/flight-controls/stab-greenband.html",
	"/nnc/flight-controls/stabilizer.html",
	"/nnc/flight-controls/stabilizer-cutout.html",
	"/nnc/flight-controls/stabilizer-l2.html",
	"/nnc/flight-controls/stabilizer-r2.html",
	"/nnc/flight-controls/stall-protection.html",
	"/nnc/flight-instruments/altimeter/altimeter-error.html",
	"/nnc/flight-instruments/altimeter/index.html",
	"/nnc/flight-instruments/airspeed-unreliable.html",
	"/nnc/flight-instruments/altn-attitude-capt.html",
	"/nnc/flight-instruments/altn-attitude-fo.html",
	"/nnc/flight-instruments/baro-set-disagree.html",
	"/nnc/flight-instruments/chkl-incomplete-norm.html",
	"/nnc/flight-instruments/chkl-non-normal.html",
	"/nnc/flight-instruments/efis-dsp-panel-l.html",
	"/nnc/flight-instruments/efis-dsp-panel-r.html",
	"/nnc/flight-instruments/hud-sngl-operation.html",
	"/nnc/flight-instruments/hud-sys-capt.html",
	"/nnc/flight-instruments/hud-sys-f-o.html",
	"/nnc/flight-instruments/hud-takeoff.html",
	"/nnc/flight-instruments/isfd-use.html",
	"/nnc/flight-instruments/loss-of-all-displays.html",
	"/nnc/flight-instruments/pfd-unreliable-capt.html",
	"/nnc/flight-instruments/pfd-unreliable-f-o.html",
	"/nnc/flight-instruments/radio-altimeter-l+r.html",
	"/nnc/flight-instruments/sgl-source-attitude.html",
	"/nnc/flight-instruments/sgl-source-rad-alt.html",
	"/nnc/flight-mgmnt/fmc/fmc.html",
	"/nnc/flight-mgmnt/fmc/fmc-hold-airspace.html",
	"/nnc/flight-mgmnt/fmc/fmc-intercept-hdg.html",
	"/nnc/flight-mgmnt/fmc/fmc-message.html",
	"/nnc/flight-mgmnt/fmc/fmc-perf-unavail.html",
	"/nnc/flight-mgmnt/fmc/fmc-runway-disagree.html",
	"/nnc/flight-mgmnt/fmc/fmc-unable-rta.html",
	"/nnc/flight-mgmnt/fmc/fmc-verify-position.html",
	"/nnc/flight-mgmnt/fmc/single-fmc.html",
	"/nnc/flight-mgmnt/nav/nav-air-data-sys.html",
	"/nnc/flight-mgmnt/nav/nav-airspeed-data.html",
	"/nnc/flight-mgmnt/nav/nav-approach-gls.html",
	"/nnc/flight-mgmnt/nav/nav-approach-ils.html",
	"/nnc/flight-mgmnt/nav/nav-inertial-sys.html",
	"/nnc/flight-mgmnt/nav/nav-iru.html",
	"/nnc/flight-mgmnt/nav/nav-single-gps.html",
	"/nnc/flight-mgmnt/nav/nav-unable-rnp.html",
	"/nnc/flight-mgmnt/fmc/index.html",
	"/nnc/flight-mgmnt/nav/index.html",
	"/nnc/flight-mgmnt/ads-b-out.html",
	"/nnc/flight-mgmnt/ahru-att-mode-l.html",
	"/nnc/flight-mgmnt/ahru-att-mode-r.html",
	"/nnc/flight-mgmnt/gps.html",
	"/nnc/flight-mgmnt/insufficient-fuel.html",
	"/nnc/flight-mgmnt/iru-ahru-motion.html",
	"/nnc/flight-mgmnt/iru-att-mode-l.html",
	"/nnc/flight-mgmnt/iru-att-mode-r.html",
	"/nnc/flight-mgmnt/lnav-bank-angle-lim.html",
	"/nnc/flight-mgmnt/rwy-app-crs-error.html",
	"/nnc/flight-mgmnt/rhy-app-tune-error.html",
	"/nnc/flight-mgmnt/sgl-source-approach.html",
	"/nnc/flight-mgmnt/single-source-f-d.html",
	"/nnc/flight-mgmnt/tcp-alt-nav.html",
	"/nnc/flight-mgmnt/transponder.html",
	"/nnc/flight-mgmnt/transponder-panel.html",
	"/nnc/flight-mgmnt/vnav-step-climb.html",
	"/nnc/flight-mgmnt/weather-radar-sys.html",
	"/nnc/fuel/crossfeed/fuel-auto-jettison.html",
	"/nnc/fuel/crossfeed/fuel-crossfeed.html",
	"/nnc/fuel/crossfeed/fuel-jett-nozzle-l.html",
	"/nnc/fuel/crossfeed/fuel-jett-nozzle-r.html",
	"/nnc/fuel/crossfeed/fuel-jettison.html",
	"/nnc/fuel/crossfeed/fuel-jettison-main.html",
	"/nnc/fuel/crossfeed/fuel-jettison-sys.html",
	"/nnc/fuel/crossfeed/fuel-leak.html",
	"/nnc/fuel/pump/fuel-pump-center-l.html",
	"/nnc/fuel/pump/fuel-pump-center-r.html",
	"/nnc/fuel/pump/fuel-pump-ctr-l-r.html",
	"/nnc/fuel/pump/fuel-pump-l-aft.html",
	"/nnc/fuel/pump/fuel-pump-l-fwd.html",
	"/nnc/fuel/pump/fuel-pump-r-aft.html",
	"/nnc/fuel/pump/fuel-pump-r-fwd.html",
	"/nnc/fuel/crossfeed/index.html",
	"/nnc/fuel/pump/index.html",
	"/nnc/fuel/fuel-balance-sys.html",
	"/nnc/fuel/fuel-disagree.html",
	"/nnc/fuel/fuel-flow-eng-l.html",
	"/nnc/fuel/fuel-flow-eng-r.html",
	"/nnc/fuel/fuel-imbalance.html",
	"/nnc/fuel/fuel-in-center.html",
	"/nnc/fuel/fuel-low-center.html",
	"/nnc/fuel/fuel-press-eng-l.html",
	"/nnc/fuel/fuel-press-eng-r.html",
	"/nnc/fuel/fuel-press-eng-l+r.html",
	"/nnc/fuel/fuel-qty-low.html",
	"/nnc/fuel/fuel-temp-high.html",
	"/nnc/fuel/fuel-temp-low.html",
	"/nnc/fuel/fuel-unusable-ctr.html",
	"/nnc/fuel/fuel-valve-apu.html",
	"/nnc/general/door/door-entry-1l.html",
	"/nnc/general/door/door-entry-1r.html",
	"/nnc/general/door/door-entry-2l.html",
	"/nnc/general/door/door-entry-2r.html",
	"/nnc/general/door/door-entry-3l.html",
	"/nnc/general/door/door-entry-3r.html",
	"/nnc/general/door/door-entry-4l.html",
	"/nnc/general/door/door-entry-4r.html",
	"/nnc/general/door/index.html",
	"/nnc/general/crew-oxygen-low.html",
	"/nnc/general/door-aft-cargo.html",
	"/nnc/general/door-aft-ee-access.html",
	"/nnc/general/door-bulk-cargo.html",
	"/nnc/general/door-fd-ovhd.html",
	"/nnc/general/door-fwd-access.html",
	"/nnc/general/door-fho-cargo.html",
	"/nnc/general/door-fwd-ee-access.html",
	"/nnc/general/doors.html",
	"/nnc/general/elt-on.html",
	"/nnc/general/emer-lights.html",
	"/nnc/general/evac-command.html",
	"/nnc/general/fd-door-auto-unlock.html",
	"/nnc/general/fd-door-lock-fail.html",
	"/nnc/general/fd-door-open.html",
	"/nnc/general/pass-oxygen-on.html",
	"/nnc/general/window-damage-fwd-l.html",
	"/nnc/general/window-damage-fwd-r.html",
	"/nnc/general/window-damage-side-l.html",
	"/nnc/general/window-damage-side-r.html",
	"/nnc/hydraulics/overheat/hyd-overheat-c1.html",
	"/nnc/hydraulics/overheat/hyd-overheat-c2.html",
	"/nnc/hydraulics/overheat/hyd-overheat-dem-l.html",
	"/nnc/hydraulics/overheat/hyd-overheat-dem-r.html",
	"/nnc/hydraulics/overheat/hyd-overheat-pri-l.html",
	"/nnc/hydraulics/overheat/hyd-overheat-pri-r.html",
	"/nnc/hydraulics/overheat/index.html",
	"/nnc/hydraulics/hyd-press-c1.html",
	"/nnc/hydraulics/hyd-press-c2.html",
	"/nnc/hydraulics/hyd-press-dem-l.html",
	"/nnc/hydraulics/hyd-press-dem-r.html",
	"/nnc/hydraulics/hyd-press-pri-l.html",
	"/nnc/hydraulics/hyd-press-pri-r.html",
	"/nnc/hydraulics/hyd-press-sys-c.html",
	"/nnc/hydraulics/hyd-press-sys-l.html",
	"/nnc/hydraulics/hyd-press-sys-l-c.html",
	"/nnc/hydraulics/hyd-press-sys-l-c-r.html",
	"/nnc/hydraulics/hyd-press-sys-l-r.html",
	"/nnc/hydraulics/hyd-press-sys-r.html",
	"/nnc/hydraulics/hyd-press-sys-r-c.html",
	"/nnc/hydraulics/hyd-qty-low-c.html",
	"/nnc/hydraulics/hyd-qty-low-l.html",
	"/nnc/hydraulics/hyd-qty-low-r.html",
	"/nnc/hydraulics/rat-unlocked.html",
	"/nnc/landing-gear/antiskid.html",
	"/nnc/landing-gear/autobrake.html",
	"/nnc/landing-gear/brake-temp.html",
	"/nnc/landing-gear/brakes.html",
	"/nnc/landing-gear/gear-control.html",
	"/nnc/landing-gear/gear-disagree.html",
	"/nnc/landing-gear/gear-door.html",
	"/nnc/landing-gear/gear-drag-brace-l.html",
	"/nnc/landing-gear/gear-drag-brace-r.html",
	"/nnc/landing-gear/gear-lever-locked-down.html",
	"/nnc/landing-gear/gear-side-brace-l.html",
	"/nnc/landing-gear/gear-side-brace-r.html",
	"/nnc/landing-gear/nose-wheel-steering.html",
	"/nnc/landing-gear/tiller-l.html",
	"/nnc/landing-gear/tiller-r.html",
	"/nnc/landing-gear/tire-press.html",
	"/nnc/unannunciated/index.html",
	"/nnc/unannunciated/engine/index.html",
	"/nnc/unannunciated/fire/index.html",
	"/nnc/unannunciated/ops/index.html",
	"/nnc/unannunciated/ops/etops-verify.html",
	"/nnc/unannunciated/ops/low-vis-takeoff-brief.html",
	"/nnc/unannunciated/ops/low-vis-approach-brief.html",
	"/nnc/unannunciated/ops/rnav-approach-verify.html",
	"/nnc/unannunciated/window/index.html",
	"/nnc/unannunciated/evacuation.html",
	"/nnc/unannunciated/ditching.html ",
	"/nnc/unannunciated/overweight-landing.html",
	"/nnc/general/index.html",
	"/nnc/air/index.html",
	"/nnc/anti-ice/index.html",
	"/nnc/autoflight/index.html",
	"/nnc/comms/index.html",
	"/nnc/elec/index.html",
	"/nnc/engine/index.html",
	"/nnc/fire/index.html",
	"/nnc/flight-controls/index.html",
	"/nnc/flight-instruments/index.html",
	"/nnc/flight-mgmnt/index.html",
	"/nnc/fuel/index.html",
	"/nnc/hydraulics/index.html",
	"/nnc/landing-gear/index.html",
	"/nnc/warning/index.html",
	"/nnc/warning/config/config-doors.html",
	"/nnc/warning/config/config-flaps.html",
	"/nnc/warning/config/config-gear.html",
	"/nnc/warning/config/config-parking-brake.html",
	"/nnc/warning/config/config-rudder.html",
	"/nnc/warning/config/config-spoilers.html",
	"/nnc/warning/config/config-stabilizer.html",
	"/nnc/warning/config/config-warning-sys.html",
	"/nnc/warning/config/index.html",
	"/nnc/warning/airspeed-low.html",
	"/nnc/warning/altitude-alert.html",
	"/nnc/warning/altitude-callouts.html",
	"/nnc/warning/aural-canceled.html",
	"/nnc/warning/gnd-prox-sys.html",
	"/nnc/warning/gps-flap-ovrd.html",
	"/nnc/warning/gps-gear-ovrd.html",
	"/nnc/warning/gps-terr-ovrd.html",
	"/nnc/warning/overspeed.html",
	"/nnc/warning/pilot-response.html",
	"/nnc/warning/tail-strike.html",
	"/nnc/warning/tcas.html",
	"/nnc/warning/tcas-off.html",
	"/nnc/warning/tcas-ra-captain.html",
	"/nnc/warning/tcas-ra-f-o.html",
	"/nnc/warning/terr-pos.html",
	"/nnc/warning/windshear-sys.html"
]

self.addEventListener('install', function (event) {

	event.waitUntil((async () => {
	    const cache = await caches.open('sw-cashe-v01');
	    await cache.addAll(cashe);
	})());
});

self.addEventListener('fetch', function (event) {
	event.respondWith(
		// Try the cache
		caches.match(event.request).then(function (response) {
			// return it if there is a response,or else fetch again
			return response || fetch(event.request);
		})
	);
});