"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import {
  ArrowDownLeft, ArrowDownRight, ArrowLeftRight, ArrowUpRight, Bell,
  Check, CircleHelp, Download, History, Leaf,
  Menu, Package, Plus, Search, Settings2, Wheat, X,
} from "lucide-react";
import {
  formatDate, formatQuantity, getStock, INITIAL_STATE,
  type Ingredient, type InventoryState, type Movement, type MovementType,
} from "@/lib/inventory";

type View = "overview" | "ingredients" | "history";
type Dialog = "movement" | "ingredient" | "edit" | null;
const storageKey = "bag-dapoorbakes-inventory-v3";
const previousStorageKey = "bag-dapoorbakes-inventory-v2";
const legacyStorageKey = "bag-dapoorbakes-inventory-v1";
const previousDemoOpeningBalances: Record<string, number> = { eggs: 24, sugar: 4.5, flour: 3.2, chocolate: 1.2, cocoa: 0.8, oil: 2, baking: 250 };

function readSavedState(): InventoryState {
  try {
    const current = localStorage.getItem(storageKey);
    const previous = localStorage.getItem(previousStorageKey);
    const value = current ?? previous ?? localStorage.getItem(legacyStorageKey);
    if (!value) return INITIAL_STATE;
    const parsed: unknown = JSON.parse(value);
    if (typeof parsed !== "object" || parsed === null || !Array.isArray((parsed as InventoryState).ingredients) || !Array.isArray((parsed as InventoryState).movements)) return INITIAL_STATE;
    const rawState = parsed as InventoryState;
    const savedState: InventoryState = {
      ingredients: rawState.ingredients.filter((item): item is Ingredient => !!item && typeof item.id === "string" && typeof item.name === "string" && typeof item.category === "string" && typeof item.unit === "string" && Number.isFinite(item.minimum) && item.minimum >= 0 && Number.isFinite(item.openingStock) && item.openingStock >= 0 && typeof item.color === "string"),
      movements: rawState.movements.filter((item): item is Movement => !!item && typeof item.id === "string" && typeof item.ingredientId === "string" && ["in", "out", "adjustment"].includes(item.type) && Number.isFinite(item.quantity) && typeof item.note === "string" && typeof item.createdAt === "string" && Number.isFinite(Date.parse(item.createdAt))),
    };
    if (current) return savedState;
    if (previous) return { ...savedState, ingredients: savedState.ingredients.map((ingredient) => Object.hasOwn(previousDemoOpeningBalances, ingredient.id) ? { ...ingredient, openingStock: previousDemoOpeningBalances[ingredient.id] } : ingredient) };
    const migratedMovements = savedState.movements.map((movement) => movement.type === "adjustment" ? { ...movement, quantity: -Math.abs(movement.quantity) } : movement);
    const migratedIngredients = savedState.ingredients.map((ingredient) => {
      const openingEntry = savedState.movements.find((movement) => movement.ingredientId === ingredient.id && movement.type === "in" && movement.note === "Saldo awal" && movement.quantity === ingredient.openingStock);
      return openingEntry ? { ...ingredient, openingStock: 0 } : ingredient;
    });
    return { ingredients: migratedIngredients, movements: migratedMovements };
  } catch { return INITIAL_STATE; }
}

type MovementInput = { ingredientId: string; type: MovementType; quantity: number; note: string };

function MovementDialog({ ingredients, stockFor, initialIngredientId, onClose, onSave }: {
  ingredients: Ingredient[]; stockFor: (ingredientId: string) => number; initialIngredientId?: string;
  onClose: () => void; onSave: (movement: MovementInput) => string | null;
}) {
  const [type, setType] = useState<MovementType>("in");
  const [ingredientId, setIngredientId] = useState(initialIngredientId ?? ingredients[0]?.id ?? "");
  const [quantity, setQuantity] = useState("");
  const [note, setNote] = useState("");
  const [error, setError] = useState("");
  const ingredient = ingredients.find((item) => item.id === ingredientId);
  const submit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const value = Number(quantity);
    if (!ingredient || !Number.isFinite(value) || value < 0 || (type !== "adjustment" && value === 0) || !note.trim()) {
      setError("Isi jumlah dan catatan dengan benar."); return;
    }
    const delta = type === "adjustment" ? value - stockFor(ingredientId) : value;
    if (type === "adjustment" && delta === 0) { setError("Jumlah hasil hitung sama dengan stok yang tercatat."); return; }
    if (type === "out" && value > stockFor(ingredientId)) { setError("Jumlah yang dipakai melebihi stok yang tersedia."); return; }
    const result = onSave({ ingredientId, type, quantity: delta, note: note.trim() });
    if (result) setError(result);
  };
  return <div className="overlay" onMouseDown={(event) => event.target === event.currentTarget && onClose()}>
    <form className="dialog" onSubmit={submit} aria-labelledby="movement-title">
      <div className="dialog-heading"><div><span className="kicker">RIWAYAT STOK</span><h2 id="movement-title">Catat perubahan stok</h2></div><button className="icon-button" type="button" onClick={onClose} aria-label="Tutup dialog"><X size={18} /></button></div>
      <p className="dialog-intro">Catat bahan yang baru dibeli, dipakai, atau hasil hitung fisik.</p>
      <div className="movement-tabs" role="group" aria-label="Pilih jenis perubahan stok">
        {(["in", "out", "adjustment"] as MovementType[]).map((item) => <button type="button" key={item} aria-pressed={type === item} className={type === item ? "chosen" : ""} onClick={() => { setType(item); setError(""); }}>
          {item === "in" ? <ArrowDownLeft size={15} /> : item === "out" ? <ArrowUpRight size={15} /> : <Settings2 size={15} />}{item === "in" ? "Stok masuk" : item === "out" ? "Stok keluar" : "Sesuaikan stok"}
        </button>)}
      </div>
      <label htmlFor="movement-ingredient">Bahan</label>
      <select id="movement-ingredient" value={ingredientId} onChange={(event) => setIngredientId(event.target.value)} required>{ingredients.map((item) => <option key={item.id} value={item.id}>{item.name} · stok {formatQuantity(stockFor(item.id))} {item.unit}</option>)}</select>
      <div className="quantity-line"><div className="field-grow"><label htmlFor="movement-quantity">{type === "adjustment" ? "Jumlah hasil hitung fisik" : "Jumlah"}</label><input id="movement-quantity" type="number" inputMode="decimal" min="0" step="any" value={quantity} onChange={(event) => { setQuantity(event.target.value); setError(""); }} placeholder={type === "adjustment" ? "Jumlah hasil hitung" : "Masukkan jumlah"} required /></div><span className="unit-tag">{ingredient?.unit ?? "satuan"}</span></div>
      {type === "adjustment" && ingredient && quantity !== "" && <div className="reconcile-note">Stok tercatat {formatQuantity(stockFor(ingredientId))} {ingredient.unit}. Jumlah hasil hitung akan menggantikan angka ini.</div>}
      <label htmlFor="movement-note">Catatan</label><input id="movement-note" value={note} onChange={(event) => { setNote(event.target.value); setError(""); }} maxLength={120} placeholder={type === "in" ? "Contoh: belanja bahan" : type === "out" ? "Contoh: produksi pesanan" : "Contoh: hitung ulang stok"} required />
      {error && <p className="form-error" role="alert">{error}</p>}
      <div className="dialog-actions"><button className="button secondary" type="button" onClick={onClose}>Batal</button><button className="button primary" type="submit">Simpan catatan <ArrowDownRight size={15} /></button></div>
    </form>
  </div>;
}

function IngredientDialog({ initial, onClose, onSave }: {
  initial?: Ingredient; onClose: () => void; onSave: (value: Omit<Ingredient, "id" | "openingStock"> & { openingStock?: number }, existingId?: string) => void;
}) {
  const [name, setName] = useState(initial?.name ?? "");
  const [unit, setUnit] = useState(initial?.unit ?? "");
  const [category, setCategory] = useState(initial?.category ?? "Bahan pokok");
  const [minimum, setMinimum] = useState(initial ? String(initial.minimum) : "");
  const [opening, setOpening] = useState("");
  const [error, setError] = useState("");
  const submit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!name.trim() || !unit.trim() || !Number.isFinite(Number(minimum)) || Number(minimum) < 0 || (!initial && (!Number.isFinite(Number(opening)) || Number(opening) < 0))) {
      setError("Periksa kembali nama, satuan, stok awal, dan batas minimum."); return;
    }
    onSave({ name: name.trim(), unit: unit.trim(), category, minimum: Number(minimum), color: initial?.color ?? "#9b765d", ...(!initial ? { openingStock: Number(opening) } : {}) }, initial?.id);
  };
  return <div className="overlay" onMouseDown={(event) => event.target === event.currentTarget && onClose()}><form className="dialog" onSubmit={submit} aria-labelledby="ingredient-title">
    <div className="dialog-heading"><div><span className="kicker">STOK BAHAN</span><h2 id="ingredient-title">{initial ? "Ubah bahan" : "Tambah bahan"}</h2></div><button className="icon-button" type="button" onClick={onClose} aria-label="Tutup dialog"><X size={18} /></button></div>
    <p className="dialog-intro">Pakai satuan yang sama setiap kali mencatat bahan ini.</p>
    <label htmlFor="ingredient-name">Nama bahan</label><input autoFocus id="ingredient-name" value={name} onChange={(event) => setName(event.target.value)} placeholder="Contoh: Keju parut" required />
    <div className="two-fields"><div><label htmlFor="ingredient-unit">Satuan</label><input id="ingredient-unit" value={unit} onChange={(event) => setUnit(event.target.value)} placeholder="kg, gram, butir" required /></div><div><label htmlFor="ingredient-category">Kelompok bahan</label><select id="ingredient-category" value={category} onChange={(event) => setCategory(event.target.value)}>{["Bahan pokok", "Bahan segar", "Bahan kering", "Bahan cair", "Bahan tambahan", "Lainnya"].map((item) => <option key={item}>{item}</option>)}</select></div></div>
    {initial ? <><label htmlFor="ingredient-minimum">Batas minimum stok <small>(satuan: {unit || "—"})</small></label><input id="ingredient-minimum" type="number" inputMode="decimal" min="0" step="any" value={minimum} onChange={(event) => setMinimum(event.target.value)} required /></> : <><label htmlFor="ingredient-opening">Stok awal hasil hitung</label><input id="ingredient-opening" type="number" inputMode="decimal" min="0" step="any" value={opening} onChange={(event) => setOpening(event.target.value)} placeholder="0" required /><label htmlFor="ingredient-minimum">Batas minimum stok <small>(satuan: {unit || "—"})</small></label><input id="ingredient-minimum" type="number" inputMode="decimal" min="0" step="any" value={minimum} onChange={(event) => setMinimum(event.target.value)} placeholder="0" required /></>}
    {error && <p className="form-error" role="alert">{error}</p>}<div className="dialog-actions"><button className="button secondary" type="button" onClick={onClose}>Batal</button><button className="button primary" type="submit">{initial ? "Simpan perubahan" : "Tambah bahan"}</button></div>
  </form></div>;
}

function movementLabel(type: MovementType) { return type === "in" ? "Stok masuk" : type === "out" ? "Stok keluar" : "Penyesuaian stok"; }

export default function Home() {
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const railRef = useRef<HTMLElement>(null);
  const [state, setState] = useState<InventoryState>(INITIAL_STATE);
  const [ready, setReady] = useState(false);
  const [view, setView] = useState<View>("overview");
  const [dialog, setDialog] = useState<Dialog>(null);
  const [editing, setEditing] = useState<Ingredient | undefined>();
  const [query, setQuery] = useState("");
  const [group, setGroup] = useState("Semua kelompok");
  const [period, setPeriod] = useState("Semua waktu");
  const [toast, setToast] = useState("");
  const [mobileNav, setMobileNav] = useState(false);
  const [today, setToday] = useState("");
  useEffect(() => { setState(readSavedState()); setReady(true); setToday(new Intl.DateTimeFormat("id-ID", { weekday: "long", day: "numeric", month: "long", year: "numeric" }).format(new Date())); }, []);
  useEffect(() => { if (ready) { try { localStorage.setItem(storageKey, JSON.stringify(state)); } catch { setToast("Penyimpanan browser penuh. Unduh riwayat stok sebagai CSV."); } } }, [state, ready]);
  useEffect(() => { if (!toast) return; const timer = window.setTimeout(() => setToast(""), 3000); return () => window.clearTimeout(timer); }, [toast]);
  useEffect(() => { if (!dialog) return; const onKey = (event: KeyboardEvent) => { if (event.key === "Escape") setDialog(null); }; window.addEventListener("keydown", onKey); return () => window.removeEventListener("keydown", onKey); }, [dialog]);
  useEffect(() => {
    if (!mobileNav) return;
    railRef.current?.querySelector<HTMLButtonElement>(".rail-link")?.focus();
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMobileNav(false);
        menuButtonRef.current?.focus();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [mobileNav]);
  useEffect(() => { const onSlash = (event: KeyboardEvent) => { const target = event.target as HTMLElement; if (event.key === "/" && !dialog && !["INPUT", "TEXTAREA", "SELECT"].includes(target.tagName) && !target.isContentEditable) { event.preventDefault(); document.querySelector<HTMLInputElement>(".search-control input")?.focus(); } }; window.addEventListener("keydown", onSlash); return () => window.removeEventListener("keydown", onSlash); }, [dialog]);

  const movements = useMemo(() => [...state.movements].sort((a, b) => b.createdAt.localeCompare(a.createdAt)), [state.movements]);
  const stockRows = useMemo(() => state.ingredients.map((ingredient) => ({ ingredient, stock: getStock(ingredient, state.movements) })), [state.ingredients, state.movements]);
  const lowStock = stockRows.filter(({ ingredient, stock }) => stock <= ingredient.minimum);
  const filteredIngredients = stockRows.filter(({ ingredient }) => ingredient.name.toLocaleLowerCase("id").includes(query.toLocaleLowerCase("id")) && (group === "Semua kelompok" || ingredient.category === group));
  const filteredMovements = movements.filter((movement) => {
    const ingredient = state.ingredients.find((item) => item.id === movement.ingredientId);
    const matchesQuery = `${ingredient?.name ?? ""} ${movement.note} ${movementLabel(movement.type)}`.toLocaleLowerCase("id").includes(query.toLocaleLowerCase("id"));
    const cutoff = period === "7 hari terakhir" ? 7 : period === "30 hari terakhir" ? 30 : 0;
    const matchesPeriod = !cutoff || Date.now() - new Date(movement.createdAt).getTime() <= cutoff * 86_400_000;
    return matchesQuery && matchesPeriod;
  });
  const stockFor = (ingredientId: string) => { const ingredient = state.ingredients.find((item) => item.id === ingredientId); return ingredient ? getStock(ingredient, state.movements) : 0; };
  const notify = (message: string) => setToast(message);
  const addMovement = (input: MovementInput): string | null => {
    const current = stockFor(input.ingredientId);
    if (input.type === "out" && input.quantity > current) return "Jumlah yang dipakai melebihi stok yang tersedia.";
    if (input.type === "adjustment" && current + input.quantity < 0) return "Penyesuaian ini membuat stok menjadi negatif.";
    const movement: Movement = { ...input, id: crypto.randomUUID(), createdAt: new Date().toISOString() };
    setState((previous) => ({ ...previous, movements: [movement, ...previous.movements] })); setDialog(null); notify(input.type === "adjustment" ? "Stok berhasil disesuaikan." : "Perubahan stok berhasil dicatat."); return null;
  };
  const saveIngredient = (input: Omit<Ingredient, "id" | "openingStock"> & { openingStock?: number }, existingId?: string) => {
    if (existingId) {
      setState((previous) => ({ ...previous, ingredients: previous.ingredients.map((item) => item.id === existingId ? { ...item, ...input } : item) }));
      notify("Perubahan bahan disimpan.");
    } else {
      const id = crypto.randomUUID(); const openingStock = input.openingStock ?? 0;
      setState((previous) => ({ ingredients: [...previous.ingredients, { ...input, id, openingStock: 0 }], movements: openingStock > 0 ? [{ id: crypto.randomUUID(), ingredientId: id, type: "in", quantity: openingStock, note: "Stok awal", createdAt: new Date().toISOString() }, ...previous.movements] : previous.movements }));
      notify("Bahan ditambahkan.");
    }
    setDialog(null); setEditing(undefined);
  };
  const exportCsv = () => {
    const safeCell = (value: string) => `"${(/^[=+@\-]/.test(value) ? `'${value}` : value).replaceAll('"', '""')}"`;
    const lines = [["Waktu", "Bahan", "Jenis perubahan", "Jumlah", "Satuan", "Catatan"], ...filteredMovements.map((movement) => {
      const ingredient = state.ingredients.find((item) => item.id === movement.ingredientId);
      const sign = movement.type === "in" ? "+" : movement.type === "out" ? "−" : movement.quantity > 0 ? "+" : "−";
      return [formatDate(movement.createdAt), ingredient?.name ?? "Bahan tidak ditemukan", movementLabel(movement.type), `${sign}${formatQuantity(Math.abs(movement.quantity))}`, ingredient?.unit ?? "", movement.note];
    })];
    const blob = new Blob(["\ufeff", lines.map((line) => line.map(safeCell).join(",")).join("\r\n")], { type: "text/csv;charset=utf-8" });
    const url = URL.createObjectURL(blob); const link = document.createElement("a"); link.href = url; link.download = "riwayat-stok-daporbakes.csv"; link.click(); window.setTimeout(() => URL.revokeObjectURL(url), 1000); notify("Riwayat stok diunduh.");
  };
  const changeView = (next: View) => {
    setView(next);
    setQuery("");
    if (mobileNav) {
      setMobileNav(false);
      menuButtonRef.current?.focus();
    }
  };
  const openEdit = (ingredient: Ingredient) => { setEditing(ingredient); setDialog("edit"); };
  const startMovement = (ingredient?: Ingredient) => { setEditing(ingredient); setDialog("movement"); };

  return <div className="workspace">
    <aside id="stock-navigation" ref={railRef} className={`rail ${mobileNav ? "rail-open" : ""}`}>
      <a className="wordmark" href="#overview" onClick={() => changeView("overview")}><span className="wordmark-icon"><Wheat size={20} /></span><span><strong>Dapor<span>bakes</span></strong><small>BUKU STOK</small></span></a>
      <div className="rail-section">USAHA</div><div className="bakery-switch"><span className="bakery-monogram">D</span><span><strong>Daporbakes</strong><small>Stok bahan dapur</small></span></div>
      <div className="rail-section nav-label">PERSEDIAAN</div><nav className="rail-nav" aria-label="Navigasi stok">
        <button className={view === "overview" ? "rail-link active" : "rail-link"} onClick={() => changeView("overview")}><span className="rail-symbol">⌂</span>Ringkasan</button>
        <button className={view === "ingredients" ? "rail-link active" : "rail-link"} onClick={() => changeView("ingredients")}><Package size={17} />Daftar bahan<span className="rail-count">{state.ingredients.length}</span></button>
        <button className={view === "history" ? "rail-link active" : "rail-link"} onClick={() => changeView("history")}><History size={17} />Riwayat stok</button>
      </nav>
      <div className="rail-bottom"><div className="stock-note"><span className="note-stamp"><Leaf size={14} /></span><p>Stok awal masih berupa contoh. Hitung bahan di rak sebelum mulai mencatat.</p><button onClick={() => changeView("ingredients")}>Periksa daftar bahan <span>↗</span></button></div><div className="account"><span className="account-avatar">L</span><span><strong>Data lokal</strong><small>Tidak tersinkron</small></span><button aria-label="Tentang penyimpanan data" onClick={() => notify("Data tersimpan di browser ini dan tidak tersinkron ke perangkat lain.")}><CircleHelp size={16} /></button></div></div>
    </aside>
    {mobileNav && <button className="scrim" aria-label="Tutup menu navigasi" onClick={() => { setMobileNav(false); menuButtonRef.current?.focus(); }} />}
    <main className="main-column">
      <header className="masthead"><button ref={menuButtonRef} className="icon-button menu-toggle" aria-label="Buka menu navigasi" aria-expanded={mobileNav} aria-controls="stock-navigation" onClick={() => setMobileNav(true)}><Menu size={20} /></button><div className="crumb">Dapur <span>/</span> <strong>{view === "overview" ? "Ringkasan" : view === "ingredients" ? "Daftar bahan" : "Riwayat stok"}</strong></div><div className="masthead-right"><span className="today">{today}</span><button className={`reminder ${lowStock.length ? "has-alert" : ""}`} aria-label="Lihat bahan yang perlu dicek" onClick={() => { changeView("ingredients"); setGroup("Semua kelompok"); }}><Bell size={17} />{lowStock.length > 0 && <i />}</button><span className="head-rule" /><span className="local-status"><i /> Data tersimpan di perangkat ini</span></div></header>
      <div className="page">
        <section className="page-title"><div><span className="kicker"><span className="kicker-line" />STOK DAPUR <span>·</span> {today ? today.toLocaleUpperCase("id-ID") : ""}</span><h1>{view === "overview" ? "Stok bahan hari ini" : view === "ingredients" ? "Daftar bahan" : "Riwayat stok"}</h1><p>{view === "overview" ? "Lihat jumlah bahan, stok yang perlu dicek, dan perubahan terbaru." : view === "ingredients" ? "Kelola bahan dan batas minimum stok." : "Lihat bahan masuk, pemakaian, dan penyesuaian stok."}</p></div><div className="title-actions">{view === "ingredients" ? <button className="button primary" onClick={() => setDialog("ingredient")}><Plus size={16} />Tambah bahan</button> : view === "history" ? <><button className="button secondary" onClick={exportCsv}><Download size={15} />Unduh CSV</button><button className="button primary" onClick={() => startMovement()}><Plus size={16} />Catat perubahan</button></> : <button className="button primary" onClick={() => startMovement()}><Plus size={16} />Catat perubahan</button>}</div></section>

        {view === "overview" && <>
          <section className="summary-strip" aria-label="Ringkasan stok bahan"><div><span className="summary-label">JUMLAH BAHAN</span><strong>{String(stockRows.length).padStart(2, "0")} <small>bahan</small></strong><span className="summary-caption">di dalam daftar</span></div><div className="summary-divider" /><div><span className="summary-label">PERLU DICEK</span><strong className={lowStock.length ? "warm-number" : ""}>{String(lowStock.length).padStart(2, "0")} <small>bahan</small></strong><span className="summary-caption">stok mencapai batas minimum</span></div><div className="summary-divider" /><div className="summary-help"><span className="summary-label">CATAT PERUBAHAN</span><span>Catat setiap pembelian, pemakaian, atau hasil hitung stok.</span><button onClick={() => startMovement()}>Catat stok <span>↗</span></button></div></section>
          {lowStock.length > 0 && <button className="low-stock-note" aria-label="Lihat bahan yang perlu dicek" onClick={() => { changeView("ingredients"); setGroup("Semua kelompok"); }}><span className="alert-mark"><Bell size={15} /></span><span><strong>{lowStock.map(({ ingredient }) => ingredient.name).join(", ")} perlu dicek</strong><small>Stok mencapai batas minimum atau kurang. Hitung ulang sebelum belanja.</small></span><span className="alert-arrow">Lihat bahan</span></button>}
        </>}

        {view === "ingredients" && <div className="context-note"><CircleHelp size={16} /><span>Stok awal dan batas minimum masih berupa contoh. Perbarui setelah menghitung bahan, lalu gunakan <strong>Catat perubahan → Sesuaikan stok</strong>.</span></div>}

        {view !== "history" && <section className="ledger panel">
          <div className="ledger-heading"><div><span className="kicker">STOK BAHAN</span><h2>{view === "overview" ? "Daftar stok" : "Semua bahan"}<span className="count-mark">{String(stockRows.length).padStart(2, "0")}</span></h2></div><div className="ledger-tools"><label className="search-control"><Search size={15} /><input aria-label="Cari nama bahan" placeholder="Cari nama bahan" value={query} onChange={(event) => setQuery(event.target.value)} /><kbd>/</kbd></label>{view === "ingredients" && <select className="group-select" aria-label="Pilih kelompok bahan" value={group} onChange={(event) => setGroup(event.target.value)}><option>Semua kelompok</option>{[...new Set(state.ingredients.map((item) => item.category))].map((item) => <option key={item}>{item}</option>)}</select>}</div></div>
          <div className="ledger-columns"><span>BAHAN</span><span>STOK SAAT INI</span><span>BATAS MINIMUM</span><span>STATUS</span><span /></div>
          {filteredIngredients.map(({ ingredient, stock }) => { const isLow = stock <= ingredient.minimum; const pct = ingredient.minimum > 0 ? Math.min(100, stock / (ingredient.minimum * 2.5) * 100) : 100; return <article className="ingredient-row" key={ingredient.id}><div className="ingredient-cell"><span className="ingredient-swatch" style={{ backgroundColor: ingredient.color }} /><span><strong>{ingredient.name}</strong><small>{ingredient.category}</small></span></div><div className="amount-cell"><strong>{formatQuantity(stock)}</strong><small>{ingredient.unit}</small><span className="amount-track"><i className={isLow ? "track-low" : ""} style={{ width: `${Math.max(4, pct)}%` }} /></span></div><div className="limit-cell"><strong>{formatQuantity(ingredient.minimum)}</strong><small>{ingredient.unit}</small></div><div><span className={`condition ${isLow ? "condition-low" : "condition-ok"}`}><i />{isLow ? "Perlu dicek" : "Cukup"}</span></div><div className="row-actions"><button className="row-action" title={`Ubah ${ingredient.name}`} aria-label={`Ubah ${ingredient.name}`} onClick={() => openEdit(ingredient)}><Settings2 size={15} /></button><button className="row-action add-action" title={`Catat ${ingredient.name}`} aria-label={`Catat perubahan stok ${ingredient.name}`} onClick={() => startMovement(ingredient)}><Plus size={16} /></button></div></article>; })}
          {filteredIngredients.length === 0 && <div className="empty-ledger"><Package size={22} /><strong>{query ? "Bahan tidak ditemukan" : "Belum ada bahan"}</strong><span>{query ? "Coba kata kunci lain atau pilih kelompok berbeda." : "Tambahkan bahan untuk mulai mencatat stok."}</span>{view === "ingredients" && !query && <button className="button secondary" onClick={() => setDialog("ingredient")}><Plus size={14} />Tambah bahan</button>}</div>}
          <div className="ledger-foot"><span>Stok dihitung dari stok awal dan setiap perubahan yang dicatat.</span>{view === "overview" && <button onClick={() => changeView("ingredients")}>Kelola bahan <ArrowDownRight size={14} /></button>}</div>
        </section>}

        {view !== "history" && <section className="recent panel"><div className="recent-heading"><div><span className="kicker">BARU DICATAT</span><h2>Perubahan terbaru</h2></div><button onClick={() => changeView("history")}>Lihat riwayat <ArrowDownRight size={14} /></button></div>{movements.slice(0, 5).map((movement) => { const ingredient = state.ingredients.find((item) => item.id === movement.ingredientId); const positive = movement.type === "in" || (movement.type === "adjustment" && movement.quantity >= 0); const prefix = movement.type === "out" ? "−" : movement.quantity >= 0 ? "+" : "−"; return <div className="recent-row" key={movement.id}><span className={`recent-glyph ${positive ? "glyph-in" : "glyph-out"}`}>{movement.type === "adjustment" ? <ArrowLeftRight size={15} /> : positive ? <ArrowDownLeft size={15} /> : <ArrowUpRight size={15} />}</span><span className="recent-description"><strong>{ingredient?.name ?? "Bahan tidak ditemukan"}</strong><small>{movement.note} · {movementLabel(movement.type)}</small></span><span className={`recent-quantity ${positive ? "qty-in" : "qty-out"}`}>{prefix}{formatQuantity(Math.abs(movement.quantity))} <small>{ingredient?.unit}</small></span><time>{formatDate(movement.createdAt)}</time></div>; })}{movements.length === 0 && <div className="empty-ledger"><History size={21} /><strong>Belum ada perubahan stok</strong><span>Perubahan yang dicatat akan muncul di sini.</span></div>}</section>}

        {view === "history" && <section className="history-book panel"><div className="ledger-heading"><div><span className="kicker">RIWAYAT STOK</span><h2>Semua perubahan <span className="count-mark">{String(filteredMovements.length).padStart(2, "0")}</span></h2></div><div className="ledger-tools"><label className="search-control"><Search size={15} /><input aria-label="Cari riwayat stok" placeholder="Cari bahan atau catatan" value={query} onChange={(event) => setQuery(event.target.value)} /><kbd>/</kbd></label><select className="group-select period-select" aria-label="Pilih rentang waktu" value={period} onChange={(event) => setPeriod(event.target.value)}><option>Semua waktu</option><option>7 hari terakhir</option><option>30 hari terakhir</option></select></div></div><div className="history-columns"><span>BAHAN &amp; CATATAN</span><span>JENIS PERUBAHAN</span><span>WAKTU</span><span>JUMLAH</span></div>{filteredMovements.map((movement) => { const ingredient = state.ingredients.find((item) => item.id === movement.ingredientId); const incoming = movement.type === "in" || (movement.type === "adjustment" && movement.quantity > 0); const deltaSign = movement.type === "out" ? "−" : movement.quantity >= 0 ? "+" : "−"; return <div className="history-row" key={movement.id}><div className="history-name"><span className={`recent-glyph ${incoming ? "glyph-in" : "glyph-out"}`}>{movement.type === "adjustment" ? <ArrowLeftRight size={15} /> : incoming ? <ArrowDownLeft size={15} /> : <ArrowUpRight size={15} />}</span><span><strong>{ingredient?.name ?? "Bahan tidak ditemukan"}</strong><small>{movement.note}</small></span></div><span className="history-kind"><i className={incoming ? "kind-in" : "kind-out"} />{movementLabel(movement.type)}</span><time>{formatDate(movement.createdAt)}</time><strong className={incoming ? "qty-in" : "qty-out"}>{deltaSign}{formatQuantity(Math.abs(movement.quantity))} <small>{ingredient?.unit}</small></strong></div>; })}{filteredMovements.length === 0 && <div className="empty-ledger"><Search size={22} /><strong>Tidak ada perubahan yang cocok</strong><span>Coba kata kunci atau rentang waktu lain.</span></div>}<div className="ledger-foot"><span>Menampilkan {filteredMovements.length} perubahan{period !== "Semua waktu" ? ` · ${period}` : ""}.</span><button onClick={exportCsv}><Download size={14} />Unduh CSV</button></div></section>}

        <footer className="page-end"><span>Daporbakes <i>·</i> Catatan stok bahan</span><span>Prototipe lokal · v0.2</span></footer>
      </div>
    </main>
    {dialog === "movement" && <MovementDialog key={editing?.id ?? "movement"} initialIngredientId={editing?.id} ingredients={state.ingredients} stockFor={stockFor} onClose={() => { setDialog(null); setEditing(undefined); }} onSave={addMovement} />}
    {(dialog === "ingredient" || dialog === "edit") && <IngredientDialog initial={dialog === "edit" ? editing : undefined} onClose={() => { setDialog(null); setEditing(undefined); }} onSave={saveIngredient} />}
    {toast && <div className="toast" role="status"><Check size={16} />{toast}<button aria-label="Tutup pemberitahuan" onClick={() => setToast("")}><X size={14} /></button></div>}
  </div>;
}
