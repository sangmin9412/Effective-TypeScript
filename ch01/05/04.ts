interface ComponentProps {
  onSelectItem: (item: number) => void;
}
function renderSelector(props: ComponentProps) {
  //
}

let selectedId: number = 0;
function handleSelectItem(item: any) {
  selectedId = item.id; // 런타임 오류
}

renderSelector({ onSelectItem: handleSelectItem });

export default {};
