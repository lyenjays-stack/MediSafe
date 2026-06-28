# 📐 MediBox — Complete 3D Blueprint (Onshape)

**MediSafe smart pill dispenser · 7 compartments**
HGD134 · Innovative and Creative Students
Aisha Farhana Zukrina Binti Azzady · 2025698494 · KP2A1

> Copy the exact numbers below straight into your Onshape sketches.
> All dimensions are in millimetres (mm).

---

## 1. Master dimensions (every feature)

### Main body
| Feature | Dimension |
|--------|-----------|
| Length (X) | 220 mm |
| Width (Y) | 120 mm |
| Height (Z) | 45 mm |
| Vertical edge fillet | 8 mm |
| Wall thickness (shell, top face open) | 3 mm |

### Seven compartments
| Feature | Dimension |
|--------|-----------|
| Each compartment | 28 mm × 28 mm |
| Gap between compartments | 3 mm |
| Compartment corner fillet | 2 mm |
| Cut depth (Extrude Remove) | 25 mm |
| Linear Pattern spacing | 31 mm (28 + 3) |
| Number of instances | 7 |

✅ **Checked:** 7 × 28 mm + 6 × 3 mm = **214 mm**, which exactly matches the
box's inner length (220 − 2 × 3 mm walls = 214 mm). The compartments fill one
neat row with no leftover gap — mention this to your lecturer, it shows the
design was calculated.

### Front-face features
| Feature | Shape | Dimension | Operation |
|--------|-------|-----------|-----------|
| Camera hole | Circle | Ø 12 mm | Remove through wall |
| OLED display recess | Rectangle | 35 mm × 20 mm | Remove 2 mm deep |
| Push button | Circle | Ø 8 mm | Remove through wall |

### LED indicator holes (top face)
| Feature | Dimension |
|--------|-----------|
| Each LED hole | Ø 5 mm |
| Quantity | 7 (one above each compartment) |
| Alignment | Centred over each compartment, 31 mm apart |

### Back face
| Feature | Shape | Dimension | Operation |
|--------|-------|-----------|-----------|
| USB-C port | Rectangle | 12 mm × 5 mm | Remove through wall |

### Lid (separate part)
| Feature | Dimension |
|--------|-----------|
| Thickness | 3 mm |
| Footprint | 220 mm × 120 mm (matches body) |
| Lip (fits inside opening) | 2 mm tall × 2 mm in from edge |
| Lip corner fillet | match 8 mm body radius |

---

## 2. Build order in Onshape (refined)

1. **Base** — New Part Studio → sketch a **center rectangle 220 × 120** on the Top Plane → **Extrude 45 mm**.
2. **Round corners** — **Fillet** the 4 vertical edges → **8 mm**.
3. **Hollow** — **Shell**, select the **top face**, thickness **3 mm**.
4. **Compartments** — sketch a **28 × 28** square in one corner of the opening → add a **2 mm fillet** on its corners → **Extrude Remove 25 mm** → **Linear Pattern** along the length, **spacing 31 mm**, **7 instances**.
5. **Camera hole** — front face, **Ø 12 mm** circle → **Remove** through wall.
6. **OLED recess** — top-front area, **35 × 20** rectangle → **Remove 2 mm**.
7. **Push button** — **Ø 8 mm** circle → **Remove**.
8. **USB-C** — back face, **12 × 5** rectangle → **Remove**.
9. **LED holes** — **Ø 5 mm** circles, one above each compartment (31 mm apart).
10. **Lid** — new Part, **3 mm** thick, add a **2 mm lip** so it seats inside the box.

---

## 3. Appearance (assign in Onshape)

| Part | Colour | Hex |
|------|--------|-----|
| Body | White | `#F5F5F5` |
| Accent trim / lid edge | Teal | `#119B95` |
| OLED display | Black | `#000000` |
| LEDs | Green | `#2E9E6B` |
| Push button | Navy | `#0C2B2C` |

These match the MediSafe app & website brand colours, so the box, app, and
site all look like one product family.

---

## 4. Electronics that fit inside (parts list)

| Part | Purpose | Notes |
|------|---------|-------|
| ESP32 dev board | Brain + Wi-Fi link to the app | Fits in the 3 mm-shelled cavity |
| OV2640 camera module | AI pill verification | Sits behind the 12 mm front hole |
| 7 × LEDs (green) | Light up the correct compartment | One per compartment, 5 mm holes |
| 0.96" OLED display | Shows next dose / status | Fits the 35 × 20 mm recess |
| Momentary push button | Confirm / snooze | Behind the 8 mm hole |
| USB-C breakout | Power & charging | Behind the 12 × 5 mm slot |
| Small Li-ion battery (optional) | Portable use | Place under the compartment floor |

---

## 5. Layout sketch (reference)

```
 ____________________________________________
|                 MEDISAFE                   |   <- lid / top label
|____________________________________________|
| 1 | 2 | 3 | 4 | 5 | 6 | 7 |   <- 7 compartments (28x28, 2mm fillet)
|___|___|___|___|___|___|___|       LEDs (Ø5) sit above each
|                                            |
| [Camera Ø12]  [OLED 35x20]  [Button Ø8]    |   <- front face
|____________________________________________|
| [USB-C 12x5]                        Power  |   <- back face
```

---

## 6. Tips to impress the lecturer

- Add the **2 mm compartment fillet** (already in the steps) — it makes the box
  look like a real Philips / MedMinder product instead of a printed cube.
- Render the model with the **brand colours** above so it matches your app & site.
- Take **3 views** (top, front, isometric) for your slides.
- Mention the **calculated 214 mm exact-fit** compartment row — it shows
  engineering thinking, not guessing.
- Link the 3D box to your live MediSafe website so the app + box read as **one product**.

---

© MediSafe · HGD134 · MediBox engineering blueprint
