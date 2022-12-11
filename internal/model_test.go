package internal

import (
	"encoding/json"
	"testing"
)

func TestName(t *testing.T) {
	var m = Model{
		Name: "sssss",
		X:    1.5,
		Y:    2.4,
		Z:    2.7,
	}
	bs, err := json.Marshal(m)
	if err != nil {
		t.Fatal(err)
	}

	t.Log(string(bs))

	m.Z = 9999

	err = json.Unmarshal(bs, &m)

	if err != nil {
		t.Fatal(err)
	}
	t.Log(m.Z)
}
